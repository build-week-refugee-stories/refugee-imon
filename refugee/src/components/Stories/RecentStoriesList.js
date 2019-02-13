import React from 'react';
import axios from 'axios';
import RecentStory from './RecentStory';


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

    deleteStory = (e, id) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                autorization: token
            }
        }
        axios.delete(`https://refugeestories.herokuapp.com/api/deletestory/${id}`, requestOptions)
            .then(res => {
                console.log(res)
                this.props.history.push('/recent-stories')
            })
            .catch(err => console.log(err))
    }

    acceptStory = (e, id) => {
        e.preventDefault();
    }


    render() {

        return (
            <div>
                {this.state.recentStories.map((reStory, index) => {
                    return (
                        <RecentStory reStory={reStory} key={index} deleteStory={this.deleteStory} />
                    )
                })}
            </div>
        )
    }
}

export default RecentStoriesList;