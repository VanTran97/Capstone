import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        })
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
            name: '',
            email: '',
            password: '',
        });
      }

    render() {
        return (
            <div className="register-content">
                <form onSubmit={this.handleSubmit}>
                    <div className="name-content">
                        <div>
                            <input type="text" value={this.state.name} name="name" placeholder="Name" className="register-input" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="email-content">
                        <div>
                            <input type="email" value={this.state.email} name="email" placeholder="Email" className="register-input" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="password-content">
                        <div>
                            <input type="password" value={this.state.password} name="password" placeholder="Password" className="register-input" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="register-submit-button"></input>
                    <Link to="/" className="register-back-button">Back</Link>
                </form>
            </div>
        );
    }
}

export default Register;