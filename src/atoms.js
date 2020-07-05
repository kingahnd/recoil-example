import { atom } from 'recoil';

export const currentSongIDState = atom({
    key: 'currentSongID',
    default: ''
});

export const songsState = atom({
    key: 'songList',
    default: []
});
