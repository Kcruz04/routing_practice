import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

    const {name, comment} = useParams()

    return (
        <div>
            <h1>Hi, my name is {name}</h1>
            <h3>{name} {comment}</h3>
        </div>
    )
}

export default About