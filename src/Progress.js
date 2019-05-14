// @format

import React, { useMemo } from 'react'

import colors from 'colors.js'

const Progress = ({ style, barStyle, value, max }) => {
	const height = useMemo(() => (style.height != null ? style.height : 32), [
		style,
	])

	const barColor = useMemo(
		() =>
			barStyle != null && barStyle.backgroundColor !== undefined
				? barStyle.backgroundColor
				: 'blue',
		[barStyle],
	)
	const textColor = useMemo(() => {
		let hex = colors.name2hex(barColor)
		if (hex[0] !== '#') {
			hex = barColor
		}

		return colors.complement(hex)
	}, [barColor])

	return (
		<div
			style={{
				padding: 0,
				height,
				border: `2px solid ${barColor}`,
				cursor: 'default',
				...style,
			}}
		>
			<div
				style={{
					width: `${(value * 100) / max}%`,
					height: '100%',
					margin: 0,
					backgroundColor: barColor,
					transition: 'all .5s',
					...barStyle,
				}}
			/>

			<div
				style={{
					padding: 0,
					margin: 0,
					textAlign: 'center',
					fontSize: height - 8,
					fontWeight: 'bold',
					mixBlendMode: 'difference',
					color: textColor,
					transform: `translate(0, -${height - 2}px)`,
				}}
			>
				{value} / {max}
			</div>
		</div>
	)
}

export default Progress
