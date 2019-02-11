import React from 'react';
import axios from 'axios';

import Story from './Story'

class Stories extends React.Component {
    constructor() {
        super()

        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        axios.get('https://refugeestories.herokuapp.com/api/stories')
            .then(res => {
                this.setState({
                    stories: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                {this.state.stories.map((story, index) => {
                    return (
                        <Story story={story} key={index} />
                    )
                })}
            </div>
        )
    }
}

export default Stories;