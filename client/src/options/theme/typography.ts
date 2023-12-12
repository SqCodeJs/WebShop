import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme();

export const typography = {
    fontFamily: `"Quicksand", sans-serif`,
    h1: {
        fontSize: '2rem', // 32px
        lineHeight: 1.2, // 38.4px
        [baseTheme.breakpoints.up('sm')]: {
            fontSize: '2.4rem', // 38.4px
        },
        [baseTheme.breakpoints.up('md')]: {
            fontSize: '3rem', // 48px
        },
        [baseTheme.breakpoints.up('lg')]: {
            fontSize: '3.5rem', // 56px
        },
    },
    h2: {
        fontSize: '1.8rem', // 28.8px
        lineHeight: 1.3, // 37.44px
        [baseTheme.breakpoints.up('sm')]: {
            fontSize: '2rem', // 32px
        },
        [baseTheme.breakpoints.up('md')]: {
            fontSize: '2.5rem', // 40px
        },
        [baseTheme.breakpoints.up('lg')]: {
            fontSize: '3rem', // 48px
        },
    },
    h3: {
        fontSize: '1.6rem', // 25.6px
        lineHeight: 1.4, // 35.84px
        [baseTheme.breakpoints.up('sm')]: {
            fontSize: '1.8rem', // 28.8px
        },
        [baseTheme.breakpoints.up('md')]: {
            fontSize: '2.2rem', // 35.2px
        },
        [baseTheme.breakpoints.up('lg')]: {
            fontSize: '2.5rem', // 40px
        },
    },
    h4: {
        fontSize: '1.4rem', // 22.4px
        lineHeight: 1.5, // 33.6px
        [baseTheme.breakpoints.up('sm')]: {
            fontSize: '1.6rem', // 25.6px
        },
        [baseTheme.breakpoints.up('md')]: {
            fontSize: '1.8rem', // 28.8px
        },
        [baseTheme.breakpoints.up('lg')]: {
            fontSize: '2rem', // 32px
        },
    },
    h5: {
        fontSize: '0.875rem', // 14px for sm breakpoint
        lineHeight: 1.2,
        [baseTheme.breakpoints.up('md')]: {
            fontSize: '1rem', // 16px for md breakpoint
        },
        [baseTheme.breakpoints.up('lg')]: {
            fontSize: '1.125rem', // 18px for lg breakpoint
        },
    },
    h6: {
        fontSize: '0.75rem', // 12px for sm breakpoint
        [baseTheme.breakpoints.up('md')]: {
            fontSize: '0.875rem', // 14px for md breakpoint
        },
        [baseTheme.breakpoints.up('lg')]: {
            fontSize: '1rem', // 16px for lg breakpoint
        },
    },
    subtitle1: {
        fontSize: '1rem', // 16px
        lineHeight: 1.8, // 28.8px
    },
    subtitle2: {
        fontSize: '0.875rem', // 14px
        lineHeight: 1.9, // 26.6px
    },
    body1: {
        fontSize: '1rem', // 16px
        lineHeight: 1.6, // 25.6px
    },
    body2: {
        fontSize: '0.875rem', // 14px
        lineHeight: 1.6, // 22.4px
    },
    caption: {
        fontSize: '0.75rem', // 12px
        lineHeight: 1.4, // 16.8px
    },
};
