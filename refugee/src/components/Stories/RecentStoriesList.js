import React from 'react';
import axios from 'axios';
import RecentStory from './RecentStory';

import './RecentStories.css';


class RecentStoriesList extends React.Component {
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
                    recentStories: res.data
                })
            })
            .catch(err => console.log(err))
    }



    render() {

        return (
            <div className='recent-stories-container'>
                {this.state.recentStories.map((reStory, index) => {
                    return (
                        <RecentStory
                            reStory={reStory}
                            key={index}
                            deleteStory={this.deleteStory}
                            acceptStory={this.acceptStory}
                        />
                    )
                })}
            </div>
        )
    }
}

export default RecentStoriesList;