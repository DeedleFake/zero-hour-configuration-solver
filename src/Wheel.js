// @format

import React, { useMemo, useEffect } from 'react'

const mapRange = (start, end, f) => {
	let r = []
	for (let i = start; i < end; i++) {
		r.push(f(i))
	}
	return r
}

const Wheel = ({ style, size, enabled, selected, onSelect }) => {
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
		<div
			style={{
				width: 2 * size + 0.5 * size,
				height: 2 * size + 0.5 * size,
				...style,
			}}
		>
			{mapRange(1, 13, (i) => (
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
							rotate(${(i - 1) * 30 + 285}deg)
							translate(${size}px, 0px)
							rotate(-${(i - 1) * 30 + 285}deg)
						`,
						cursor: selected !== i && en.includes(i) ? 'pointer' : 'default',
						backgroundColor: !en.includes(i)
							? 'grey'
							: selected === i
							? 'lightgreen'
							: 'cyan',
					}}
					onClick={(ev) => {
						ev.preventDefault()
						if (!en.includes(i)) {
							return
						}

						onSelect(i)
					}}
				>
					{i}
				</div>
			))}
		</div>
	)
}

export default Wheel
