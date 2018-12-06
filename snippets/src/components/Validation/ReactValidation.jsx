// import validator from 'validator'
import validator from 'validator'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import React, { Component } from 'react'

const required = (value) => {
    if (!value.toString().trim().length) {
        console.log('required')
        return 'required'
    }
}

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`
    }
}

const isEqual = (value, props, components) => {
    const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
    const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;

    if(bothUsed && bothChanged && components.password[0].value !== components.confirm[0].value) {
        return <span>Passwords are not equal</span>
    }
}

export default class Login extends Component {
    handleClick = () => {
        this.form.validateAll()
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log('Submitted...')
    }
    render() {
        return <Form ref={c => {this.form = c}} onSubmit={this.handleSubmit}>
            <h3>Login</h3>
            <div>
                <button onClick={this.handleClick}>Validate All</button>
            </div>
            <div>
                <label htmlFor="email">Email*
                    <Input type="email" name="email" id="email" placeholder='email@email.com' validations={[required, email]} />
                </label>
            </div>
            <div>
                <label htmlFor="password">Password*
                    <Input type="password" name="password" id="password" placeholder="password" ref={pass => {this.userPassword = pass}} validations={[required, isEqual]} />
                </label>
            </div>
            <div>
                <label htmlFor="confirm">Confirm Password*
                    <Input type="password" name="confirm" id="confirm" placeholder="password" ref={pass => {this.userPassword = pass}} validations={[required, isEqual]} />
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </Form>
    }
}