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
            {/* <form onSubmit={(e) => props.acceptStory(e, props.individualRecentStory.id)} >
                <input onChange={props.handleInput} type='text' name='title' value={props.individualRecentStory.title} />
                <input onChange={props.handleInput} type='text' name='author' value={props.individualRecentStory.author} />
                <input onChange={props.handleInput} type='text' name='url_thumbnail' value={props.individualRecentStory.country} />
                <textarea onChange={props.handleInput} type='text' name='body' value={props.individualRecentStory.body} ></textarea>
                <i onClick={(e) => props.acceptStory(e, props.individualRecentStory.id)} className="fas fa-check-double"></i>
            </form> */}

        </div>
    )
}

export default IndividualRecentStoryCard;