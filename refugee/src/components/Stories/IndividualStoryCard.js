import React from 'react'
import './IndividualStoryCard.css'

const IndividualStoryCard = props => {

    return (
        <div className='individual-story-card'>
            <div>{props.individualStory.author}</div>
            <div>{props.individualStory.title}</div>
            <div>{props.individualStory.body}</div>
            <img src={props.individualStory.url_thumbnail} alt='pic' />
        </div>
    )
}

export default IndividualStoryCard;