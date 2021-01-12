import React from 'react';
import SingThatSongFunction from './SingThatSongFunction'


const SongDataFunction = () => {
    let titleData = 'September'
    let lyrics = `Do you remember, 21st night of September?
    Love was changing the mind of pretenders
    While chasing the clouds away
    Our hearts were ringing
    In the key that our souls were singing
    As we danced in the night
    Remember
    How the stars stole the night away, oh yeah
`
    let artist = 'Earth Wind and Fire'
    let releaseYear = '1900s'
    return (
        <div>
            <SingThatSongFunction
                titleData={titleData}
                lyrics={lyrics}
                artist={artist}
                releaseYear={releaseYear}
            />
        </div>
    );
};

export default SongDataFunction;