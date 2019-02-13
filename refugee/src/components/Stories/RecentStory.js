import React from 'react';
import { Link } from 'react-router-dom';


class RecentStory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reStory: this.props.reStory
        }
    }

    render() {
        return (
            <div>
                <Link key={this.state.reStory.id} to={`/recent-stories/${this.props.reStory.id}`}>
                    <div>{this.state.reStory.title}</div>
                    <div>{this.state.reStory.author}</div>
                    <img src={this.state.reStory.url_thumbnail} alt='pic' />
                    <div>{this.state.reStory.body}</div>
                </Link>
            </div>
        )
    }

}

export default RecentStory;