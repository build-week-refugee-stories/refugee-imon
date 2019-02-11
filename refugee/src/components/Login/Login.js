import React from 'react';

import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: ''
        }

    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value, e.target.name)
    }

    setUser = e => {
        e.preventDefault();
        const user = this.state.user;
        localStorage.setItem('user', user);
        window.location.reload()
    }

    render() {

        return (
            <div className='login'>
                <form onSubmit={this.setUser}>
                    <input
                        placeholder='Enter Username'
                        type='text'
                        name='user'
                        onChange={this.handleInput}
                        value={this.state.user}
                        required
                    />
                    <input
                        placeholder='Enter Password'
                        type='password'
                        name='password'
                        onChange={this.handleInput}
                        value={this.state.password}
                        required
                    />
                    <button type='submit'>LOGIN IN</button>
                </form>
            </div>
        )
    }

}

export default Login;