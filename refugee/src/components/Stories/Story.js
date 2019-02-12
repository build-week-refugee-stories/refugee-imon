import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

class Story extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div><img src={this.props.story.url_thumbnail} /></div>
                <div>{this.props.story.title}</div>
                <div>{this.props.story.snippet}</div>
                <button><i className="fas fa-arrow-circle-right"></i>LEARN MORE</button>
            </div>
        )
    }

}

export default Story;