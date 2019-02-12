import React from 'react';
import axios from 'axios';

import Story from './Story'

class Stories extends React.Component {
    constructor(props) {
        super(props)

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
                {this.state.stories.map((story) => {
                    return (
                        <Story story={story} key={story.id} />
                    )
                })}
            </div>
        )
    }
}

export default Stories;