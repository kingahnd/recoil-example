import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentSongQuery } from './selectors';

const CurrentSong = () => {
    const currentSong = useRecoilValue(currentSongQuery);

    return currentSong ? (
        <>
            <h2>Current Song Details:</h2>
            <p>Artist: {currentSong.artist}</p>
            <p>Released: {currentSong.year}</p>
        </>
    ) : null;
};

export default CurrentSong;
