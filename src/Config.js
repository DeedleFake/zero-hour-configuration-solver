// @format

import React, { useMemo } from 'react'

import colors from 'colors.js'

const configs = {
	void: { label: 'Void', color: 'purple' },
	arc: { label: 'Arc', color: 'lightblue' },
	//solar: {label: 'Solar', color: 'orange'},
}

const Config = ({ direction, selected, onSelect }) => {
	const selectedColor = useMemo(() => {
		let rgb = colors.name2rgb(configs[selected].color)
		return colors.rgb2hex(
			Math.max(0, rgb.R - 50),
			Math.max(0, rgb.G - 50),
			Math.max(0, rgb.B - 50),
		)
	}, [selected])

	return (
		<div style={{ display: 'flex', flexDirection: direction || 'row' }}>
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
						backgroundColor: selected === id ? selectedColor : color,
						cursor: selected !== id && 'pointer',
						marginRight: 8,
					}}
					onClick={(ev) => {
						ev.preventDefault()
						if (selected === id) {
							return
						}

						onSelect(id)
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
	)
}

export default Config
