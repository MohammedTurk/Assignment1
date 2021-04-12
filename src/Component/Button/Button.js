import React from 'react';
import "./Button.css"

export default function Button({ name }) {
    return (
        <React.Fragment>
            <input type="submit" value={name} />
        </React.Fragment>
    )
}
