import { selector } from 'recoil';

import { getSongs, getSongById } from './client';
import { currentSongIDState } from './atoms';

export const songsQuery = selector({
    key: 'songs',
    get: async () => {
        const response = await getSongs();
        return response;
    }
});

export const currentSongQuery = selector({
    key: 'currentSong',
    get: async ({ get }) => {
        const response = await getSongById(get(currentSongIDState));
        return response;
    }
});
