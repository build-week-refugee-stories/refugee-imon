import React from 'react'
import './IndividualStoryCard.css'

class IndividualStoryCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        console.log('this is props', this.props)
        return (
            <div className='individual-story-card'>
                <div>{this.props.individualRecentStory.author}</div>
                <div>{this.props.individualRecentStory.title}</div>
                <img src={this.props.individualRecentStory.url_thumbnail} alt='pic' />
                <div>{this.props.individualRecentStory.body}</div>
                <i onClick={(e) => this.props.acceptStory(e, this.props.individualRecentStory.id)} className="fas fa-check-double"></i>
                <i onClick={(e) => this.props.deleteStory(e, this.props.individualRecentStory.id)} className="fas fa-trash-alt"></i>
            </div>
        )
    }

}

export default IndividualStoryCard;