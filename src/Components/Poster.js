import React, { Component } from 'react';
import PropTYpes from "prop-types";


class Poster extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img_index: 0
        }
    }

    static defaultProps = {
        images: [],
        text: "Pas de description"
    }

    static propTypes = {
        images: PropTYpes.arrayOf(PropTYpes.string),
        text: PropTYpes.string
    }

    previous = () => {
        let { img_index } = this.state;
        img_index = (img_index + this.props.images.length - 1) % this.props.images.length;
        this.setState({img_index: img_index});
    }

    next = () => {
        let { img_index } = this.state;
        img_index = (img_index + 1) % this.props.images.length;
        this.setState({img_index: img_index});
    }


    render(){
        const {images, text} = this.props;
        const { img_index} = this.state;
        return (
            <div className="PosterBox">
                <button onClick={this.previous}>&larr;</button>
                <img src={images[img_index]} alt={text}/>
                <button onClick={this.next}>&rarr;</button>
            </div>
        )
    }
}
export default Poster;