import { lightMode, darkMode } from './themeModes';
import { typography } from '../options/theme/typography';
import { breakpoints } from '../options/theme/breakpoints';
import { Mode } from '../types/types';

const modes = {
    light: lightMode,
    dark: darkMode,
};

export const getDesignTokens = (mode: Mode) => ({
    typography,
    breakpoints,
    palette: {
        mode,
        ...modes[mode],
    },
});
