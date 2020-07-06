import React, { Suspense } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { songsQuery } from './selectors';
import { currentSongIDState } from './atoms';
import CurrentSong from './CurrentSong';

const Songs = () => {
    const songs = useRecoilValue(songsQuery);
    const [currentSongID, setCurrentSongID] = useRecoilState(currentSongIDState);

    /*  
     * as an alternative, we could declare them separately:
     * const currentSongID = useRecoilValue(currentSongIDState);
     * const setCurrentSongID = useSetRecoilState(currentSongIDState);
     */

    return (
        <>
            <h2>Songs</h2>
            {songs.map(song => (
                <div key={song.id}>
                    <p onClick={() => setCurrentSongID(song.id)}>
                        {song.title} {song.id === currentSongID && '*'}
                    </p>
                </div>
            ))} 
            {currentSongID && (
                <Suspense fallback={<span>Loading...</span>}>
                    <CurrentSong />
                </Suspense>
            )}
        </>
    );
};

export default Songs;
