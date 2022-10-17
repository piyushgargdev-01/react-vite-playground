import React from 'react'
import {useDispatch} from 'react-redux'
import logo from './logo.svg'
import './App.css'

import Count from './components/Count'

function App() {
    const dispatch = useDispatch();
	return (
		<div className="App">
			<button onClick={e => dispatch({ type: 'increment' })}>+</button>
            <Count />
            <button onClick={e => dispatch({ type: 'decrement' })}>-</button>
		</div>
	)
}

export default App
