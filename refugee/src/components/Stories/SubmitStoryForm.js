import React from 'react';

function SubmitStoryForm(props) {

    return (
        <div>
            <form onSubmit={props.addStory}>
                <input placeholder='Enter Author' type='text' name='author' value={props.author} onChange={props.handleInput} />
                <input placeholder='Enter Title' type='text' name='title' value={props.title} onChange={props.handleInput} />
                <input placeholder='Enter Country' type='text' name='country' value={props.country} onChange={props.handleInput} />
                <textarea placeholder='Enter Story' type='text' name='body' value={props.body} onChange={props.handleInput}></textarea>
                <button type='submit'>SUBMIT STORY</button>
            </form>
        </div>
    )
}

export default SubmitStoryForm;