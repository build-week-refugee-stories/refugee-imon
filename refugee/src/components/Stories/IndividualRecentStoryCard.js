import React from 'react';

const IndividualRecentStoryCard = props => {
    console.log(props)
    return (
        <div>
            <div>{props.individualRecentStory.title}</div>
            <div>{props.individualRecentStory.author}</div>
            <div>{props.individualRecentStory.url_thumbnail}</div>
            <div>{props.individualRecentStory.body}</div>
        </div>
    )
}

export default IndividualRecentStoryCard;