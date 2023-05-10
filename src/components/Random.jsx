import React from 'react'
import { useParams } from 'react-router-dom'

const Random = () => {
    const {city, color} = useParams()
    return (
        <div className='random'>
            <h1>Random Text</h1>
            <h3 style={{backgroundColor: color}}>Welome to {city}</h3>
        </div>
    )
}

export default Random