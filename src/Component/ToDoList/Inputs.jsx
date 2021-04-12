import React from 'react';
// import "./ToDo.css"

export default function Inputs({ formItem, handleChange, prevState, errors }) {
    return (

        <div className="form-group" key={formItem.name}>
            <label htmlFor={formItem.name}>
                {formItem.name}
            </label>
            <input placeholder={`Enter Your ${formItem.name}`} type={formItem.name} onChange={handleChange} id={formItem.name} value={prevState[formItem.name]} />
            {errors[formItem.name] && <div className="alert">{prevState.errors[formItem.name]}</div>}
        </div>


    )
}
