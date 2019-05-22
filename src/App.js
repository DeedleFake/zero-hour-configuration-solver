// @format

import React, { useReducer, useMemo, useCallback, useState } from 'react'
import { useLocalStorageState, useLocalStorageReducer } from './hooks'

import Config from './Config'
import Wheel from './Wheel'
import Solution from './Solution'
import Progress from './Progress'
import Modal from './Modal'

import colors from 'colors.js'

import solutions from './solutions'
import { contrastColor } from './util'

const solutionContrasts = Object.values(solutions.void[3]).reduce(
	(map, { color }) => ({
		...map,
		[color]: contrastColor(colors.name2rgb(color)),
	}),
	{},
)

const App = () => {
	const [showInstructions, setShowInstructions] = useState(false)

	const [wheels, setWheels] = useReducer(
		(wheels, action) => Object.values({ ...wheels, ...action }),
		4,
		(len) => new Array(len).fill(0),
	)

	const [config, setConfig] = useLocalStorageState('config', 'void')
	const [consoleNumber, setConsoleNumber] = useLocalStorageState(
		'consoleNumber',
		'3',
	)

	const [locked, dispatchLocked] = useLocalStorageReducer(
		'locked',
		(locked, action) => {
			switch (action.type) {
				case 'add':
					return {
						...locked,
						[`${action.solution.color}-${action.solution.number}`]: true,
					}

				case 'remove': {
					let key = `${action.solution.color}-${action.solution.number}`
					return Object.keys(locked).reduce(
						(obj, k) => (k !== key ? { ...obj, [k]: true } : obj),
						{},
					)
				}

				case 'clear':
					return {}

				default:
					throw new Error(`Unknown action type: ${action.type}`)
			}
		},
		{},
	)

	const [lastLocked, dispatchLastLocked] = useLocalStorageReducer(
		'lastLocked',
		(lastLocked, action) => {
			switch (action.type) {
				case 'push':
					return [...lastLocked, action.solution]

				case 'pop':
					return lastLocked.slice(0, lastLocked.length - 1)

				case 'clear':
					return []

				default:
					throw new Error(`Unknown action type: ${action.type}`)
			}
		},
		[],
	)

	const isLocked = useCallback(
		(solution) =>
			solution != null &&
			locked[`${solution.color}-${solution.number}`] != null,
		[locked],
	)

	const enabled = useMemo(
		() =>
			new Array(4).fill(null).map((_, i) =>
				Object.keys(solutions[config][consoleNumber])
					.filter((key) => !isLocked(solutions[config][consoleNumber][key]))
					.map((k) => k.split('-').map((v) => parseInt(v, 10)))
					.filter((parts) =>
						parts.slice(0, i).every((part, i) => part === wheels[i]),
					)
					.map((v) => v[i]),
			),
		[config, consoleNumber, wheels, isLocked],
	)

	const solution = useMemo(
		() =>
			solutions[config][consoleNumber][wheels.join('-')] || {
				color: 'grey',
				number: 0,
			},
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
					<Config
						selected={config}
						onSelect={(id) => {
							setConfig(id)

							if (
								Object.keys(locked).length === 0 ||
								!window.confirm('Would you like to reset the puzzle state?')
							) {
								return
							}

							dispatchLocked({ type: 'clear' })
						}}
					/>

					<h3>Console 1</h3>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'start',
							minWidth: 300,
							maxWidth: 500,
						}}
					>
						<Wheel
							style={{ flex: '0 1 100%' }}
							enabled={enabled[0]}
							selected={wheels[0]}
							onSelect={(i) => setWheels({ '0': i })}
						/>
						<Wheel
							style={{ flex: '0 .8 100%' }}
							enabled={enabled[1]}
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
						</select>
					</h3>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'start',
							minWidth: 300,
							maxWidth: 500,
						}}
					>
						<Wheel
							style={{ flex: '0 1 100%' }}
							enabled={enabled[2]}
							selected={wheels[2]}
							onSelect={(i) => setWheels({ '2': i })}
						/>
						<Wheel
							style={{ flex: '0 .8 100%' }}
							enabled={enabled[3]}
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
								<span
									style={{
										color: solution.color,
										backgroundColor: solutionContrasts[solution.color],
										padding: 8,
										borderRadius: 8,
									}}
								>
									{`${solution.color[0].toUpperCase()}${solution.color.substring(
										1,
									)}`}{' '}
									{solution.number}
								</span>
							) : (
								<span style={{ color: 'blue', padding: 8 }}>
									Previously Found
								</span>
							)
						) : (
							<span style={{ color: 'red', padding: 8 }}>Not Found</span>
						)}
					</h3>

					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
						}}
					>
						<button
							style={{
								color: 'white',
								backgroundColor: solution.number > 0 ? 'blue' : 'lightblue',
							}}
							disabled={solution.number === 0}
							onClick={() => {
								dispatchLocked({ type: 'add', solution })
								dispatchLastLocked({ type: 'push', solution })
							}}
						>
							Lock Sequence
						</button>

						<button
							disabled={lastLocked.length === 0}
							onClick={() => {
								dispatchLocked({
									type: 'remove',
									solution: lastLocked[lastLocked.length - 1],
								})
								dispatchLastLocked({ type: 'pop' })
							}}
						>
							Undo
						</button>

						<button
							disabled={Object.keys(locked).length === 0}
							onClick={() => {
								if (
									!window.confirm(
										'Are you sure that you want to reset the puzzle state?',
									)
								) {
									return
								}

								dispatchLocked({ type: 'clear' })
								dispatchLastLocked({ type: 'clear' })
							}}
						>
							Reset
						</button>
					</div>

					<Progress
						style={{
							backgroundColor: 'lightgrey',
							marginTop: 16,
						}}
						value={Object.keys(locked).length}
						max={49}
					/>

					<Solution
						style={{
							marginTop: 16,
						}}
						color={solution.color}
						number={solution.number}
						locked={locked}
					/>
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center',
					flexWrap: 'wrap',
					marginTop: 16,
				}}
			>
				<button
					style={{ marginRight: '1em' }}
					onClick={() => setShowInstructions(true)}
				>
					Show Instructions
				</button>

				<div style={{ margin: '1em 0px' }}>
					Created by DeedleFake. Inspired by{' '}
					<a href="https://dm.reddit.com/r/raidsecrets/comments/bmi7fv/void_configuration_solution_solver_mobile_support/emwtklf/">
						this comment
					</a>
					.
				</div>
			</div>

			<Modal open={showInstructions} onClose={() => setShowInstructions(false)}>
				<h4>Instructions</h4>

				<p style={{ maxWidth: 600 }}>
					To use, simply click the numbers on the corresponding consoles that
					are highlighted in game. Once enough numbers have been entered to
					determine a solution, a terminal in one of the colored rooms will be
					highlighted in the solution diagram. Simply go to the corresponding
					terminal in game and lock the sequence.
				</p>

				<p style={{ maxWidth: 600 }}>
					As an extra convienence, clicking the <code>Lock Sequence</code>{' '}
					button below the solution will mark the current terminal as having
					been locked, removing it from the map and removing the terminal
					sequences for that solution from the possibilities.
				</p>
			</Modal>
		</div>
	)
}

export default App
