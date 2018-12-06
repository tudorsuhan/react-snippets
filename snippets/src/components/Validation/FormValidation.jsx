// @flow
import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValidated: false
        }
    }

    validate = () => {
        const formEl = this.formEl;
        const formLength = formEl.length;

        if(formEl.checkValidity() === false) {
            for(let i = 0; i < formLength; i++) {
                const elem = formEl[i];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');

                if(errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    if(!elem.validity.valid) {
                        errorLabel.textContent = elem.validationMessage;
                    } else {
                        errorLabel.textContent = "";
                    }
                }
            }
            return false;
        } else {
            for(let i = 0; i < formLength; i++) {
                const elem = formEl[i];
                const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
                if(errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                    errorLabel.textContent = '';
                }
                return true;
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.validate()) {
            this.props.submit();
        }
        this.setState({
            isValidated: true
        });
    }

    render() {

        const props = {...this.props};
        let classNames = [];
        if(props.className) {
            classNames = [...props.className];
            delete props.className;
        }
        if(this.state.isValidated) {
            classNames.push('was-validated');
        }

        return(
            <form 
                {...props} 
                className={classNames} 
                noValidate 
                ref={form => (this.formEl = form)} 
                onSubmit={this.handleSubmit}
            >
                {this.props.children}
            </form>
        );
    }
}

export default class Validation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFormSuccess: false
        }
    }

    submit = () => {
        this.setState({
            showFormSuccess: true
        });
        setTimeout(() => {
            this.setState({
                showFormSuccess: false
            });
        }, 5000)
    }
    
    _renderSuccessMessage() {
        return(
            <div className={"alert alert-success mt-4"} role="alert">
            Form was successfully validated!
            </div>
        );
    }

    render() {
        return(
            <div className={"container pt-4"}>
                <div className={"row justify-content-center"}>
                    <div className={"card"}>
                        <h5 className={"card-header"}>Validation Form</h5>
                        <div className={"card-body"}>
                            <Form submit={this.submit}>
                                <div className={"form-group"}>
                                    <label htmlFor={"email"}>Email</label>
                                    <input id={"email"} className={"form-control"} required={true} name={"email"} type={"email"} />
                                    <div className={"invalid-feedback"} />
                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"password"}>Password</label>
                                    <input id={"password"} className={"form-control"} required={true} name={"password"} type={"password"} minLength={6} pattern="(?=.*\d)(?=.*[a-z]).{6,}" />
                                    <small className={"form-text text-muted"}>Must be at least 6 characters long, contain letters and numbers</small>
                                    <div className={"invalid-feedback"} />
                                </div>
                                <div className={"row justify-content-md-center"}>
                                    <div className={"col-sm-12"}>
                                        <button type={"submit"} className={"btn btn-primary mb-2"}>Submit</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
            </div>  
        );
    }
}