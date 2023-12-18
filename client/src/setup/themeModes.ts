import { PaletteOptions } from '@mui/material/styles/createPalette';
import { deepOrange, grey } from '@mui/material/colors';

export const darkMode: PaletteOptions = {
    primary: {
        light: '#ecdbd3',
        main: '#e7e6cc',
        dark: '#eae1d8',
    },
    secondary: {
        main: '#e2e3da',
    },
    background: {
        paper: '#615b64',
        default: '#706b72',
    },
    text: {
        primary: '#fff',
        secondary: grey[500],
    },
    divider: deepOrange[700],
};

export const lightMode: PaletteOptions = {
    primary: {
        light: '#beb8ac',
        main: '#a9a298',
        dark: '#504b49',
    },
    secondary: {
        main: '#907d98',
        dark: '#86738d',
        contrastText: '#ffffff',
    },
    divider: '#a9a9a933',
    background: {
        paper: '#f3f3f3',
        default: '#2d9ae8',
    },
    text: {
        primary: '#767676',
        secondary: '#000c;',
    },
};
