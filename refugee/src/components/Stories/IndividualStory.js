import React from 'react';

class IndividualStory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            indiviualStory: null
        }
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
        return (
            <div></div>
        )
    }
}

export default IndividualStory;