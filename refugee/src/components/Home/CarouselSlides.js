import axios from 'axios';
import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';



const items = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];


class CarouselSlides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            items: [],

        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.bkGround = this.bkGround.bind(this);
    }

    componentDidMount() {
        axios.get('https://refugeestories.herokuapp.com/api/stories')
            .then(res => {
                this.setState({
                    items: res.data
                })
            })
            .catch(err => console.log(err))
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    bkGround(item, index) {
        if (item.id === index) {
            return item.url_thumbnail
        }
    }

    render() {

        const { activeIndex } = this.state;

        const slides = this.state.items.map((item, index) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    itemBackground={this.bkGround(item, index)}
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <CarouselCaption className="text-danger" captionText={item.title} captionHeader={item.snippet} />
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                    max-width: 100%;
                    height: 500px;
                    
                }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default CarouselSlides;

