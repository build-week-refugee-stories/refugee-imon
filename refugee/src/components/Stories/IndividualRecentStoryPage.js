import React from 'react';
import axios from 'axios';
import IndividualRecentStoryCard from './IndividualRecentStoryCard';

class IndividualRecentStoryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            individualRecentStory: {
                title: '',
                author: '',
                country: '',
                body: ''
            },
            addIndividualRecentStory: {
                author: "Anonomous",
                title: "Bitcoin",
                snippet: "I was able to...",
                approved: false,
                body: "...A friends of mine, ...",
                country: "Afghdfanistan",
                url_picture: 'www.hello.com/fred.gif',
                url_thumbnail: 'https://www.unrefugees.org/media/1457/iraq-1200x600-rf278608.jpg'
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
                this.setState({
                    individualRecentStory: res.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteStory = (e, id) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: { authorization: token }
        };

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
            headers: { authorization: token }
        };

        const addIndividualRecentStory = {
            ...this.state.addIndividualRecentStory,
            approved: true,
            title: this.state.individualRecentStory.title,
            author: this.state.individualRecentStory.author,
            country: this.state.individualRecentStory.country,
            body: this.state.individualRecentStory.body
        };
        console.log(addIndividualRecentStory)
        axios.put(`https://refugeestories.herokuapp.com/api/updatestory/${id}`, addIndividualRecentStory, requestOptions)
            .then(res => {
                console.log(res)
                this.props.history.push('/stories')
            })
            .catch(err => console.log(err))
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <IndividualRecentStoryCard
                deleteStory={this.deleteStory}
                individualRecentStory={this.state.individualRecentStory}
                acceptStory={this.acceptStory}
                handleInput={this.handleInput}
            />
        )
    }
}

export default IndividualRecentStoryPage;