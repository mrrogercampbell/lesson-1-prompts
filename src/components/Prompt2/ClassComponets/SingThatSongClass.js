import React, { Component } from 'react';

class SingThatSongClass extends Component {
    render() {
        let { title, artist, lyrics, releaseYears } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{title}</h1>
                <h2>{artist}</h2>
                <p>{lyrics}</p>
                <h2>{releaseYears}</h2>
            </div>
        );
    }
}

export default SingThatSongClass;