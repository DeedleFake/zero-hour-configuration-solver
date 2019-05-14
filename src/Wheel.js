// @format

import React from 'react'

const mapRange = (start, end, f) => {
	let r = []
	for (let i = start; i < end; i++) {
		r.push(f(i))
	}
	return r
}

const Wheel = ({ style, size, selected, onSelect }) => {
	return (
		<div
			style={{
				width: 2 * size + 0.5 * size,
				height: 2 * size + 0.5 * size,
				...style,
			}}
		>
			{mapRange(0, 12, (i) => (
				<div
					key={i}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						width: 0.4 * size,
						height: 0.4 * size,
						border: 'solid',
						transform: `
							translate(${size}px, ${size}px)
							rotate(${i * 30 + 285}deg)
							translate(${size}px, 0px)
							rotate(-${i * 30 + 285}deg)
						`,
						cursor: selected !== i ? 'pointer' : 'default',
						backgroundColor: selected === i ? 'green' : 'grey',
					}}
					onClick={(ev) => {
						ev.preventDefault()
						onSelect(i)
					}}
				>
					{i + 1}
				</div>
			))}
		</div>
	)
}

export default Wheel
