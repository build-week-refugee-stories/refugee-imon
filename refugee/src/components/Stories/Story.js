import React from 'react';
import './Stories.css';

const Story = (props) => {
    console.log()
    return (
        <div className='submit-story'>
            <div><img src={props.story.url_thumbnail} alt='thumbnail-pic' /></div>
            <div><p>{props.story.title}</p></div>
            <div><p>{props.story.snippet}</p></div>
            <button><i className="fas fa-arrow-circle-right"></i>LEARN MORE</button>
        </div>
    )

}

export default Story;