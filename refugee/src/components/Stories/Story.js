import React from 'react';

const Story = (props) => {
    console.log()
    return (
        <div>
            <div><img src={props.story.url_thumbnail} alt='thumbnail-pic' /></div>
            <div>{props.story.title}</div>
            <div>{props.story.snippet}</div>
            <button><i className="fas fa-arrow-circle-right"></i>LEARN MORE</button>
        </div>
    )

}

export default Story;