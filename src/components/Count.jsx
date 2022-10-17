import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {
    const state = useSelector(state => state);

    return (
        <h1>{state}</h1>
    )
}

export default Count;