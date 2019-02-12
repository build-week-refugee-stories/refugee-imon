import React from 'react'
import './IndividualStoryCard.css'

const IndividualStoryCard = props => {

    return (
        <div className='individual-story-card'>
            <div>{props.individualStory.author}</div>
            <div>{props.individualStory.title}</div>
            <img src={props.individualStory.url_thumbnail} alt='pic' />
            <div>{props.individualStory.body}</div>
        </div>
    )
}

export default IndividualStoryCard;