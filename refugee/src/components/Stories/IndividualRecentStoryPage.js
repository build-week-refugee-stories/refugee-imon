import React from 'react';
import axios from 'axios';
import IndividualStoryCard from './IndividualStoryCard';

class IndividualRecentStoryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            individualRecentStory: {
                title: '',
                author: '',
                url_thumbnail: '',
                body: ''
            }
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchRecentStory(id)
    }

    fetchRecentStory = id => {
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                authorization: token
            }
        }
        axios.get(`https://refugeestories.herokuapp.com/api/allstories/${id}`, requestOptions)
            .then(res => {
                console.log(res)
                this.setState({
                    individualRecentStory: res.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteStory = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: { autorization: token }
        }
        const id = this.props.params.id;
        axios.delete(`https://refugeestories.herokuapp.com/api/deletestory/${id}`, requestOptions)
            .then(res => {
                console.log(res)
                this.props.history.push('/recent-stories')
            })
            .catch(err => console.log(err))
    }

    acceptStory = (e, id) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: { autorization: token }
        }

        axios.put(`https://refugeestories.herokuapp.com/api/updatestory/${id}`, requestOptions)
            .then(res => {
                console.log(res)
                this.props.history.push('/stories')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <IndividualStoryCard
                deleteStory={this.deleteStory}
                individualRecentStory={this.state.individualRecentStory}
                acceptStory={this.acceptStory}
            />
        )
    }
}

export default IndividualRecentStoryPage;