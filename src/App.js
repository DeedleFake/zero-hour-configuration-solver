// @format

import React, { useReducer, useMemo, useCallback } from 'react'
import { useLocalStorageState, useLocalStorageReducer } from './hooks'

import Config from './Config'
import Wheel from './Wheel'
import Solution from './Solution'
import Progress from './Progress'

import solutions from './solutions'

const App = () => {
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
