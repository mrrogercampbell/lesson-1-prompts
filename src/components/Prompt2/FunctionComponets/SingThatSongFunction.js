import React from 'react';

const SingThatSongFunction = (props) => {
    return (
        <div>
            <h1>{props.titleData}</h1>
            <h2>{props.artist}</h2>
            <p>{props.lyrics}</p>
            <h2>{props.releaseYear}</h2>
        </div>
    );
};

export default SingThatSongFunction;