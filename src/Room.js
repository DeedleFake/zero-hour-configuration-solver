// @format

import React, { useMemo } from 'react'

import colors from 'colors.js'

import { contrastColor } from './util'

const rows = [
	{ justify: 'space-between', terminals: [6, 1] },
	{ justify: 'space-around', terminals: [5, 3] },
	{ justify: 'space-around', terminals: [4] },
	{ justify: 'space-between', terminals: [7, 2] },
]

const Room = ({ color, number, right, locked }) => {
	const contrast = useMemo(() => {
		if (color === 'black') {
			return '#000000'
		}

		let rgb = colors.name2rgb(color)
		return contrastColor(rgb)
	}, [color])

	const highlightContrast = useMemo(() => {
		let hsv = colors.hex2hsv(contrast)
		return hsv.V > 50 ? 'black' : 'white'
	}, [contrast])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: right ? 'row-reverse' : 'row',
				justifyContent: 'space-between',
				width: 100,
				height: 100,
				backgroundColor: color,
				border: 'solid 2px',
				transform: `translate(${right ? '' : '-'}2px, 0px)`,
				cursor: 'default',
			}}
		>
			<div />
			{rows.map((row, i) => (
				<div
					key={i}
					style={{
						display: 'flex',
						flexDirection: right ? 'column' : 'column-reverse',
						justifyContent: row.justify,
					}}
				>
					{row.terminals.map((terminal) => (
						<div
							key={terminal}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: 20,
								height: 20,
								color:
									locked[`${color}-${terminal}`] != null
										? color
										: number === terminal
										? highlightContrast
										: contrast,
								backgroundColor:
									locked[`${color}-${terminal}`] == null && number === terminal
										? contrast
										: null,
							}}
						>
							{terminal}
						</div>
					))}
				</div>
			))}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						backgroundColor: color,
						width: 2,
						height: 30,
						transform: `translate(${right ? '-' : ''}2px, 0px)`,
					}}
				/>
			</div>
		</div>
	)
}

export default Room
