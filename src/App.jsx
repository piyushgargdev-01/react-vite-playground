import React from 'react'
import logo from './logo.svg'
import './App.css'

import {useCountStore} from './store/counter'

function App() {
    const counter = useCountStore();
    console.log(counter)
	return (
		<div className="App">
			<button onClick={e => counter.increment()}>+</button>
            <h1>{counter.value}</h1>
			<button onClick={e => counter.decrement()}>-</button>
		</div>
	)
}

export default App
