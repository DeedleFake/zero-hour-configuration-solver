// @format

import React, { useMemo, useEffect } from 'react'

const mapRange = (start, end, f) => {
	let r = []
	for (let i = start; i < end; i++) {
		r.push(f(i))
	}
	return r
}

const polarToCart = (mag, rot) => [mag * Math.cos(rot), mag * Math.sin(rot)]

const gap = 0.02

const Wheel = ({ style, enabled, selected, onSelect }) => {
	const en = useMemo(
		() => (enabled != null ? enabled : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
		[enabled],
	)

	useEffect(() => {
		if (en.includes(selected)) {
			return
		}

		if (en.length === 1) {
			onSelect(en[0])
			return
		}

		onSelect(0)
	}, [en, selected, onSelect])

	return (
		<svg
			xmlns="https://www.w3.org/2000/svg"
			viewBox="-50 -50 100 100"
			style={{
				padding: 4,
				...style,
			}}
		>
			{mapRange(1, 13, (i) => {
				let rotLeft = (i - 1) * (Math.PI / 6) + gap - Math.PI / 2
				let rotRight = rotLeft + Math.PI / 6 - gap * 2
				let rotCenter = rotRight - (rotRight - rotLeft) / 2

				let center = polarToCart(40, rotCenter)

				return (
					<g
						key={i}
						style={{
							cursor: selected !== i && en.includes(i) ? 'pointer' : 'default',
						}}
						onClick={(ev) => {
							ev.preventDefault()
							if (!en.includes(i)) {
								return
							}

							onSelect(i)
						}}
					>
						<path
							fill={
								!en.includes(i)
									? 'grey'
									: selected === i
									? 'lightgreen'
									: 'cyan'
							}
							d={`
								M ${polarToCart(50, rotLeft).join(' ')}
								A 50 50 0 0 1 ${polarToCart(50, rotRight).join(' ')}
								L ${polarToCart(30, rotRight - 0.01).join(' ')}
								A 30 30 0 0 0 ${polarToCart(30, rotLeft + 0.01).join(' ')}
								Z
							`}
						/>

						<text
							style={{
								fontSize: 12,
								textAnchor: 'middle',
								dominantBaseline: 'central',
							}}
							x={center[0]}
							y={center[1]}
						>
							{i}
						</text>
					</g>
				)
			})}
		</svg>
	)
}

export default Wheel
