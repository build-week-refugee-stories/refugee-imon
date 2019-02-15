import React from 'react';
import { Link } from 'react-router-dom';

import './RecentStories.css';


class RecentStory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reStory: this.props.reStory
        }
    }

    render() {
        return (
            <div className='recent-story-div'>
                <Link className='recent-story-div link' key={this.state.reStory.id} to={`/recent-stories/${this.props.reStory.id}`}>
                    <h2>{this.state.reStory.title}</h2>
                    <h4>{this.state.reStory.author}</h4>
                    <img src={this.state.reStory.url_thumbnail} alt='pic' />
                    <div>{this.state.reStory.body}</div>
                </Link>
            </div>
        )
    }

}

export default RecentStory;