// @format

import React, { useReducer, useMemo, useState } from 'react'
import { useLocalStorageState, useLocalStorageReducer } from './hooks'

import colors from 'colors.js'

import Wheel from './Wheel'
import Solution from './Solution'
import Progress from './Progress'

import * as solutions from './solutions'

const configs = {
	void: { label: 'Void', color: 'purple' },
	arc: { label: 'Arc', color: 'lightblue' },
	//solar: {label: 'Solar', color: 'orange'},
}

const App = () => {
	const [wheels, setWheels] = useReducer(
		(wheels, action) => Object.values({ ...wheels, ...action }),
		[0, 0, 0, 0],
	)

	const [config, setConfig] = useLocalStorageState('config', 'void')
	const [consoleNumber, setConsoleNumber] = useState('3')

	const [locked, setFound] = useLocalStorageReducer(
		'locked',
		(locked, action) =>
			action != null
				? {
						...locked,
						[`${action.color}-${action.number}`]: true,
				  }
				: {},
		{},
	)

	const selectedConfigColor = useMemo(() => {
		let rgb = colors.name2rgb(configs[config].color)
		return colors.rgb2hex(
			Math.max(0, rgb.R - 50),
			Math.max(0, rgb.G - 50),
			Math.max(0, rgb.B - 50),
		)
	}, [config])

	const solution = useMemo(() => {
		let w = wheels.map((v) => v + 1)
		return (
			solutions.simple[config][w.slice(0, 2).join('-')] ||
			solutions.secondary[config][consoleNumber][w.join('-')] || {
				color: 'grey',
				number: 0,
			}
		)
	}, [wheels, consoleNumber, config])

	const isSecondary = useMemo(
		() =>
			Object.keys(solutions.secondary[config][consoleNumber]).some((k) =>
				k.startsWith(
					wheels
						.slice(0, 2)
						.map((v) => v + 1)
						.join('-'),
				),
			),
		[wheels, consoleNumber, config],
	)

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', padding: '0px 8px' }}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h3>Configuration</h3>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						{Object.entries(configs).map(([id, { label, color }]) => (
							<div
								key={id}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: 50,
									height: 50,
									borderRadius: '100%',
									backgroundColor: config === id ? selectedConfigColor : color,
									cursor: config !== id && 'pointer',
									marginRight: 8,
								}}
								onClick={(ev) => {
									ev.preventDefault()
									if (config === id) {
										return
									}

									setConfig(id)
									setFound(null)
								}}
							>
								<div
									style={{
										width: 25,
										height: 25,
										borderRadius: '100%',
										backgroundColor: color,
									}}
								/>
							</div>
						))}
					</div>

					<h3>Console 1</h3>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<Wheel
							size={65}
							selected={wheels[0]}
							onSelect={(i) => setWheels({ '0': i })}
						/>
						<Wheel
							size={75}
							selected={wheels[1]}
							onSelect={(i) => setWheels({ '1': i })}
						/>
					</div>

					<h3>
						Console{' '}
						<select
							value={consoleNumber}
							onChange={(ev) => setConsoleNumber(ev.target.value)}
						>
							<option value={2}>2</option>
							<option value={3}>3</option>
						</select>{' '}
						{isSecondary ? (
							<span style={{ color: 'green' }}>Necessary</span>
						) : (
							<span style={{ color: 'red' }}>Not Necessary</span>
						)}
					</h3>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<Wheel
							size={65}
							selected={wheels[2]}
							onSelect={(i) => setWheels({ '2': i })}
						/>
						<Wheel
							size={75}
							selected={wheels[3]}
							onSelect={(i) => setWheels({ '3': i })}
						/>
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						flex: '0 1 400px',
					}}
				>
					<h3>
						Solution{' '}
						{solution.number > 0 ? (
							locked[`${solution.color}-${solution.number}`] == null ? (
								<span style={{ color: 'green' }}>Found</span>
							) : (
								<span style={{ color: 'blue' }}>Previously Found</span>
							)
						) : (
							<span style={{ color: 'red' }}>Not Found</span>
						)}
					</h3>
					<Solution
						color={solution.color}
						number={solution.number}
						locked={locked}
					/>

					<Progress
						style={{
							backgroundColor: 'lightgrey',
							marginTop: 16,
						}}
						value={Object.keys(locked).length}
						max={49}
					/>

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							marginTop: 16,
						}}
					>
						<button
							style={{
								padding: 8,
								borderRadius: 8,
								fontSize: 16,
								color: 'white',
								backgroundColor: 'blue',
							}}
							onClick={() =>
								solution.number > 0 ? setFound(solution) : () => undefined
							}
						>
							Lock Sequence
						</button>
						<button
							style={{ padding: 8, borderRadius: 8, fontSize: 16 }}
							onClick={() => {
								if (
									!window.confirm(
										'Are you sure that you want to reset the puzzle state?',
									)
								) {
									return
								}

								setFound(null)
							}}
						>
							Reset
						</button>
					</div>
				</div>
			</div>

			<div style={{ marginTop: '4em' }}>
				<h4>Instructions</h4>

				<p style={{ maxWidth: 600 }}>
					To use, simply click numbers on the first console corresponding to
					those that are lit up in-game. If the console below says 'Necessary',
					you must also go to that console and enter the sections that are lit
					up. Selecting a proper sequence will cause one of the numbers in the
					solution to be highlighted, and this is the terminal you need to go to
					in-game to lock the sequence.
				</p>

				<p style={{ maxWidth: 600 }}>
					As an extra convienence, clicking the <code>Mark as Found</code>{' '}
					button below the solution will mark the current terminal as having
					been locked, removing it from the map and showing how many terminals
					are left to lock.
				</p>
			</div>

			<div style={{ marginTop: '4em' }}>
				Created by DeedleFake. Inspired by{' '}
				<a href="https://dm.reddit.com/r/raidsecrets/comments/bmi7fv/void_configuration_solution_solver_mobile_support/emwtklf/">
					this comment
				</a>
				.
			</div>
		</div>
	)
}

export default App
