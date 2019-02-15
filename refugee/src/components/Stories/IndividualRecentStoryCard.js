import React from 'react';

import './IndividualRecentStory.css'

const IndividualRecentStoryCard = props => {

    return (
        <div className='individual-recent-story-container'>
            <div className='individual-recent-story-div'>
                <h1>{props.individualRecentStory.title}</h1>
                <h4>{props.individualRecentStory.author}</h4>
                <img src={props.individualRecentStory.country} alt='thumbnail' />
                <div>{props.individualRecentStory.body}</div>
                <i onClick={(e) => props.acceptStory(e, props.individualRecentStory.id)} className="fas fa-check-double"></i>
                <i onClick={(e) => props.deleteStory(e, props.individualRecentStory.id)} className="fas fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default IndividualRecentStoryCard;