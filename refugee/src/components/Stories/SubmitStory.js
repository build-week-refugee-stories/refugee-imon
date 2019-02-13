import React from 'react';
import axios from 'axios';
import SubmitStoryForm from './SubmitStoryForm';

class SubmitStory extends React.Component {
    constructor() {
        super()

        this.state = {
            author: '',
            title: '',
            body: '',
            country: ''
        }
    }


    addStory = e => {
        e.preventDefault();
        axios.post('https://refugeestories.herokuapp.com/api/submit', this.state)
            .then(res => {
                this.setState({
                    stories: res.data
                })
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <SubmitStoryForm newStory={this.state.newStory} addStory={this.addStory} handleInput={this.handleInput} />
            </div>
        )
    }
}

export default SubmitStory;