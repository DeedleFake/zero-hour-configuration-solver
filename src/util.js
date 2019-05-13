// @format

import colors from 'colors.js'

export const contrastColor = (rgb) => {
	let v = (rgb.R + rgb.G + rgb.B) / 3 > 128 ? 0 : 255
	return colors.rgb2hex(v, v, v)
}
