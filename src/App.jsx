import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import logo from './logo.svg'
import './App.css'

async function getAllUsers() {
    return await (await fetch('https://dummyjson.com/users')).json();
}

function App() {
    const qc = useQueryClient();
    const {data, status, error} = useQuery(['users'], getAllUsers);

    console.log(data);
    console.log(error)

    if(status !== 'success') {
        return <h1>Loading...</h1>
    }


	return (
		<div className="App">
        <button onClick={e => qc.invalidateQueries(['users'])}>Refresh</button>
			{
                data.users.map(user => <li key={user.id}>{user.firstName}</li>)
            }
		</div>
	)
}

export default App
