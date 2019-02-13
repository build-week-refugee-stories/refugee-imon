import React from 'react';

function RecentStory(props) {
    console.log(props)
    return (
        <div>
            <div>{props.reStory.title}</div>
            <div>{props.reStory.author}</div>
            <img src={props.reStory.url_thumbnail} alt='pic' />
            <div>{props.reStory.body}</div>
            <div>
                <i onClick={props.deleteStory} className="fas fa-check-double"></i>
                <i className="fas fa-trash-alt"></i>
            </div>

        </div>
    )
}

export default RecentStory;