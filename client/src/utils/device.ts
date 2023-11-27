type Size = Record<string, string>;

type Device = {
    default: string;
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktopS: string;
    desktop: string;
};

const size: Size = {
    default: "10px",
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1240px",
    desktopS: "1600px",
    desktop: "2560px",
};

export const device: Device = {
    default: `(min-width: ${size.default})`,
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktopS: `(min-width: ${size.desktopS})`,
    desktop: `(min-width: ${size.desktop})`,
};

