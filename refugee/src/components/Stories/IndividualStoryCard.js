// import React from 'react'
// import './IndividualStoryCard.css'

// class IndividualStoryCard extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {

//         return (
//             <div className='individual-story-card'>
//                 <div>{this.props.individualRecentStory.author}</div>
//                 <div>{this.props.individualRecentStory.title}</div>
//                 <img src={this.props.individualRecentStory.url_thumbnail} alt='pic' />
//                 <div>{this.props.individualRecentStory.body}</div>
//                 <i onClick={(e) => this.props.acceptStory(e, this.props.individualRecentStory.id)} className="fas fa-check-double"></i>
//                 <i onClick={(e) => this.props.deleteStory(e, this.props.individualRecentStory.id)} className="fas fa-trash-alt"></i>
//             </div>
//         )
//     }

// }

// export default IndividualStoryCard;

import React from 'react'
import './IndividualStoryCard.css'

const IndividualStoryCard = props => {

    return (
        <div className='individual-story-card'>
            <div>{props.individualStory.author}</div>
            <div>{props.individualStory.title}</div>
            <img src={props.individualStory.url_thumbnail} alt='pic' />
            <div>{props.individualStory.body}</div>
        </div>
    )
}

export default IndividualStoryCard;