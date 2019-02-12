import React from 'react';

class SubmitStory extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder='Enter Author' type='text' />
                    <input placeholder='Enter Title' type='text' />
                    <input placeholder='Enter Country' type='text' />
                    <textarea></textarea>
                    <button>SUBMIT STORY</button>
                </form>
            </div>
        )
    }
}

export default SubmitStory;