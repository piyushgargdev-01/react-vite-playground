import React from 'react'
import logo from './logo.svg'
import './App.css'

import {useDispatch} from 'react-redux'
import { decrement, increment} from './redux/slices/CounterSlice'

import Counter from './components/Counter'

function App() {
    const dispatch = useDispatch()
	return (
		<div className="App">
			<button onClick={e => dispatch(increment())}>+</button>
            <Counter />
            <button onClick={e => dispatch(decrement())}>-</button>
		</div>
	)
}

export default App
