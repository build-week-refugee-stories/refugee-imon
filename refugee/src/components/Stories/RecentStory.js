import React from 'react';
import { Link } from 'react-router-dom';


class RecentStory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/recent-stories/${this.props.reStory.id}`}>
                    <div>{this.props.reStory.title}</div>
                    <div>{this.props.reStory.author}</div>
                    <img src={this.props.reStory.url_thumbnail} alt='pic' />
                    <div>{this.props.reStory.body}</div>
                </Link>

            </div>
        )
    }

}

export default RecentStory;