import React from 'react';
import './SubmitStory.css';

function SubmitStoryForm(props) {
    console.log(props)
    return (
        <div className='submit-story-form'>
            <form onSubmit={props.addStory} className='submit-form'>
                <input className='bold-font' placeholder='Enter Author' type='text' name='author' value={props.author} onChange={props.handleInput} />
                <input className='bold-font' placeholder='Enter Title' type='text' name='title' value={props.title} onChange={props.handleInput} />
                <input className='bold-font' placeholder='Enter Country' type='text' name='country' value={props.country} onChange={props.handleInput} />
                <textarea className='bold-font' placeholder='Enter Story' type='text' name='body' value={props.body} onChange={props.handleInput}></textarea>
                <button className='bold-font' type='submit'>SUBMIT STORY</button>
            </form>
        </div>
    )
}

export default SubmitStoryForm;