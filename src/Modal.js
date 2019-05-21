// @format

import React from 'react'

const Modal = ({ open, onClose, children }) => {
	if (!open) {
		return null
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',

				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,

				backgroundColor: 'rgba(100, 100, 100, .5)',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',

					backgroundColor: 'white',
					padding: 16,
					margin: 16,
					borderRadius: 16,
				}}
			>
				{children}

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
					}}
				>
					<button onClick={() => onClose()}>Close</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
