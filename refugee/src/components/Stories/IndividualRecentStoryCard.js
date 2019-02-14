import React from 'react';

const IndividualRecentStoryCard = props => {

    return (
        <div>
            <div>
                <div>{props.individualRecentStory.title}</div>
                <div>{props.individualRecentStory.author}</div>
                <img src={props.individualRecentStory.country} alt='thumbnail' />
                <div>{props.individualRecentStory.body}</div>
                <i onClick={(e) => props.acceptStory(e, props.individualRecentStory.id)} className="fas fa-check-double"></i>
                <i onClick={(e) => props.deleteStory(e, props.individualRecentStory.id)} className="fas fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default IndividualRecentStoryCard;