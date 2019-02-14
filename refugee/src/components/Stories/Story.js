import React from 'react';
import './Stories.css';

const Story = (props) => {
    console.log()
    return (
        <div className='submit-story'>
            <div><img src={props.story.url_thumbnail} alt='thumbnail-pic' /></div>
            <h3 className='container'>{props.story.title}</h3>
            <div className='snippet-div container'><p>{props.story.snippet}</p></div>
            <button className='container'><p><i className="fas fa-arrow-circle-right"></i></p><p>LEARN MORE</p></button>
        </div>
    )

}

export default Story;