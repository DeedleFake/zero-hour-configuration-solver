// @format

import { useState, useEffect, useReducer } from 'react'

export const useLocalStorageState = (name, initial) => {
	const [state, setState] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem(name))
		} catch (err) {
			console.warn(err)
			return typeof initial === 'function' ? initial() : initial
		}
	})

	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(state))
	}, [state, name])

	return [state, setState]
}

export const useLocalStorageReducer = (
	name,
	reducer,
	initial,
	initialFunc = (v) => v,
) => {
	const [state, dispatch] = useReducer(reducer, null, () => {
		try {
			return initialFunc(JSON.parse(localStorage.getItem(name)))
		} catch (err) {
			console.warn(err)
			return initialFunc(initial)
		}
	})

	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(state))
	}, [state, name])

	return [state, dispatch]
}
