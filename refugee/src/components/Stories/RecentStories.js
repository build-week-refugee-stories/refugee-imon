import React from 'react';
import axios from 'axios';


class RecentStories extends React.Component {
    constructor() {
        super()

        this.state = {
            recentStories: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                authorization: token
            }
        }
        axios.get('https://refugeestories.herokuapp.com/api/allstories', requestOptions)
            .then(res => {
                this.setState({
                    stories: res.data
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state.recentStories)
        return (
            <div></div>
        )
    }
}

export default RecentStories;