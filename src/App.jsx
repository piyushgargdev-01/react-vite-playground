import React from 'react'
import logo from './logo.svg'
import './App.css'

import {useGetAllUsersQuery} from './redux/api/user'

function App() {
    const { data, isError, isFetching, isLoading } = useGetAllUsersQuery('/')

    if(isError) {
        return <h1>Error</h1>
    }

    if(isFetching) {
        return <h1>Fetching...</h1>
    }

    if(isLoading) {
        return <h1>Loading...</h1>
    }

	return (
		<div className="App">
			{
                data.users.map(user => <li key={user.id}>{user.firstName}</li>)
            }
		</div>
	)
}

export default App
