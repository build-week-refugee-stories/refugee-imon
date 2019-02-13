import React from 'react';

import './Login.css'
import axios from 'axios';

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

    }

    setUser = e => {
        e.preventDefault();
        const user = {
            username: this.state.user,
            password: this.state.password
        }
        axios.post('https://refugeestories.herokuapp.com/api/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/recent-stories')
            })

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