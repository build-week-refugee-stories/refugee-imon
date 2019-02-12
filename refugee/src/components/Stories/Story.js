import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

class Story extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            story: null
        }
        console.log(this.props)
    }

    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.fetchStory(id)
    }

    fetchStory = id => {
        axios.get(`https://refugeestories.herokuapp.com/api/stories/${id}`)
            .then(res => {
                this.setState(() => ({ story: res.data }))
            })
            .catch(err => console.log(err))
    }

    render() {
        if (!this.state.story) {
            return (
                <div>
                    <p>No Story Info Found...</p>
                </div>
            )
        }
        return (
            <div>
                <div><img src={this.state.story.url_thumbnail} /></div>
                <div>{this.state.story.title}</div>
                <div>{this.state.story.snippet}</div>
                <button><i className="fas fa-arrow-circle-right"></i>LEARN MORE</button>
            </div>
        )
    }

}

export default Story;