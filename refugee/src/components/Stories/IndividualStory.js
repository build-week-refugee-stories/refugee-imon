// import React from 'react';
// import axios from 'axios';
// import IndividualStoryCard from './IndividualStoryCard'

// class IndividualStoryPage extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             individualStory: {
//                 author: '',
//                 title: '',
//                 body: '',
//                 pic: ''
//             }
//         }
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id;
//         this.fetchStory(id)
//     }

//     fetchStory = id => {
//         axios.get(`https://refugeestories.herokuapp.com/api/stories/${id}`)
//             .then(res => {
//                 this.setState(() => ({ individualStory: res.data }))
//             })
//             .catch(err => console.log(err))
//     }

//     deleteStory = (e, id) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         const requestOptions = {
//             headers: { authorization: token }
//         };
//         // const id = this.props.match.params.id;
//         axios.delete(`https://refugeestories.herokuapp.com/api/deletestory/${id}`, requestOptions)
//             .then(res => {
//                 // console.log(res)
//                 this.props.history.push('/recent-stories')
//             })
//             .catch(err => console.log(err))
//     }

//     acceptStory = (e, id) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         const requestOptions = {
//             headers: {
//                 authorization: token
//             }
//         };
//         // const id = this.props.match.params.id;
//         axios.put(`https://refugeestories.herokuapp.com/api/updatestory/${id}`, requestOptions)
//             .then(res => {
//                 // console.log(res)
//                 this.props.history.push('/stories')
//             })
//             .catch(err => console.log(err))
//     }

//     render() {
//         // console.log(this.state)
//         return (
//             <IndividualStoryCard
//                 acceptStory={this.acceptStory}
//                 deleteStory={this.deleteStory}
//                 individualStory={this.state.individualStory}
//             />
//         )
//     }
// }

// export default IndividualStoryPage;

import React from 'react';
import axios from 'axios';
import IndividualStoryCard from './IndividualStoryCard'

class IndividualStoryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            individualStory: {
                author: '',
                title: '',
                body: '',
                pic: ''
            }
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchStory(id)
    }

    fetchStory = id => {
        axios.get(`https://refugeestories.herokuapp.com/api/stories/${id}`)
            .then(res => {
                this.setState(() => ({ individualStory: res.data }))
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <IndividualStoryCard individualStory={this.state.individualStory} />
        )
    }
}

export default IndividualStoryPage;