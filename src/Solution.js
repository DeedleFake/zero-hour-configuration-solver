// @format

import React from 'react'

import Room from './Room'

const rooms = [
	['green', 'black'],
	['white', 'purple'],
	['yellow', 'blue'],
	['red', 'cyan'],
]

const Solution = ({ color, number, locked }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: (rooms.length + 1) * 100,
				border: 'solid 2px',
			}}
		>
			<div />
			{rooms.map((row, i) => (
				<div
					key={i}
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					{row.map((c, i) => (
						<Room
							key={c}
							color={c}
							number={color === c && number}
							right={i > 0}
							locked={locked}
						/>
					))}
				</div>
			))}
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						width: 100,
						height: 2,
						transform: 'translate(0px, 2px)',
						backgroundColor: 'white',
					}}
				/>
			</div>
		</div>
	)
}

export default Solution
