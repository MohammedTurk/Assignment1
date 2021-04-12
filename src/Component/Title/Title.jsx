import React from 'react'
import "./Title.css"
export default function Title({ name, title }) {
    return (

        <div>
            <h1><strong>{name}</strong> {title} </h1>
        </div>

    )
}
