import React from 'react'
import './IndividualStoryCard.css'

const IndividualStoryCard = props => {

    return (
        <div className='individual-story-card'>
            <h2>{props.individualStory.title}</h2>
            <h4>{props.individualStory.author}</h4>
            <img src={props.individualStory.url_thumbnail} alt='pic' />
            <div>{props.individualStory.body}</div>
        </div>
    )
}

export default IndividualStoryCard;

