import React, { Component } from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import "./ToDo.css";
import Inputs from "./Inputs";

export default class ToDo extends Component {
    state = {
        username: "",
        password: "",
        date: "",
        id: "",
        editing: false,
        check: false,
        errors: {}

    };


    validate = _ => {
        const errors = {};
        if (this.state.username.trim() === "") {
            errors["username"] = "The Username Is Requierd ..!"
        }
        if (this.state.password.trim() === "") {
            errors["password"] = "The Password Is Requierd ..!"
        }
        if (this.state.date.trim() === "") {
            errors["date"] = "The Date Is Requierd ..!"
        }



        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleChange = e => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    };



    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({
            errors: errors || {},
            id: Math.random() * 1000
        })
        if (errors) return;
        this.props.addToList(this.state);
        this.setState({
            username: "",
            password: "",
            date: "",
        })

    };


    render() {
        const { forms } = this.props;
        return (
            <div>
                <Title name="ToDo" title="Page" />
                <div className="container" >
                    <form action="" className="form" onSubmit={this.handleSubmit}>
                        {forms.map(f => {
                            return (
                                <Inputs key={f.name} formItem={f} handleChange={this.handleChange} prevState={this.state} errors={this.state.errors} />

                            )
                        }
                        )}

                        <Button name="Add ToList" />
                    </form>
                </div>

            </div>
        )
    }
}
