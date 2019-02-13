import React from 'react';

const IndividualRecentStoryCard = props => {
    console.log(props)
    return (
        <div>
            <div>{props.individualRecentStory.title}</div>
            <div>{props.individualRecentStory.author}</div>
            <img src={props.individualRecentStory.url_thumbnail} alt='thumbnail' />
            <div>{props.individualRecentStory.body}</div>
            <i onClick={(e) => this.props.acceptStory(e, this.props.individualRecentStory.id)} className="fas fa-check-double"></i>
//          <i onClick={(e) => this.props.deleteStory(e, this.props.individualRecentStory.id)} className="fas fa-trash-alt"></i>
        </div>
    )
}

export default IndividualRecentStoryCard;