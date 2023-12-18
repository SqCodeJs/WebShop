import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './device';

const PageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 16px;
`;

const Wrapp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.main`
    flex-grow: 1;
`;

const ColumnWrapp = styled(Wrapp)`
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Title = styled.h2`
    font-family: Roboto, sans-serif;
    font-weight: 100;

    @media ${device.default} {
        font-size: 14px;
        align-items: center;
    }

    @media ${device.tablet} {
        font-size: 38px;
    }

    @media ${device.laptop} {
        font-size: 42px;
    }
`;

const GalleryTitle = styled(Title)`
    font-size: 32px;
    font-weight: 400;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.7);
    padding: 16px 16px 0;
    
    @media ${device.mobileS} {
        font-size: 18px;
    }

    @media ${device.tablet} {
        font-size: 24px;
    }

    @media ${device.laptopL} {
        font-size: 32px;
    }
`;

const Description = styled(Title)`
    font-size: 14px;
    letter-spacing: 1px;
    color: #767676;
    line-height: 16px;
`;

const Logo = styled(Link)`
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;

    color: #2d9ae8;
    text-decoration: none;

    text-transform: uppercase;
    cursor: pointer;
`;

const LogoHeader = styled(Link)`
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media ${device.mobileS} {
        font-size: 22px;
        line-height: 38px;
    }

    @media ${device.mobileM} {
        font-size: 24px;
        line-height: 38px;
    }

    @media ${device.mobileL} {
        font-size: 38px;
        line-height: 42px;
    }

    @media ${device.tablet} {
        position: static;
        transform: translate(0);
        margin-left: 40px;
        color: #2d9ae8;
        font-size: 48px;
        line-height: 58px;
    }

    @media ${device.laptop} {
        font-size: 54px;
        line-height: 64px;
    }

    @media ${device.laptopL} {
        margin: 0;
        font-size: 56px;
        line-height: 66px;
    }
`;

const Position = styled.div`
    width: 50%;
    position: absolute;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Roboto, sans-serif;
    letter-spacing: 1px;
    font-size: 10px;
    font-weight: 100;
    padding: 10px;
    border-radius: 20px;
    text-decoration: none;
    color: rgba(200, 200, 200, 1);
    background-color: rgba(45, 154, 232, 0.3);
    transition: 0.2s;

    &:hover {
        background-color: rgba(45, 154, 232, 3);
        color: rgba(250, 250, 250, 1);
    }

    @media ${device.default} {
        font-size: 14px;
    }

    @media ${device.tablet} {
    font-size: 14px;
    }

    @media ${device.laptop} {
        font-size: 18px;
    }

    @media ${device.desktopS} {
        font-size: 20px;
    }
`;

const Sampel = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 5px;
    width: 24%;
    overflow: hidden;
    height: 260px;
    flex-grow: 0;
    border-radius: 30px;
    background-color: rgb(192, 192, 192, 0.2);
    transition: 0.2s;
`;

const Img = styled.img`
    width: 70%;
    padding: 1%;
    background-color: rgb(255, 255, 255);
    object-fit: contain;
`;

const Radio = styled.input``;

export {
    PageWrapper,
    Wrapp,
    Main,
    ColumnWrapp,
    Container,
    Row,
    Title,
    Logo,
    LogoHeader,
    Radio,
    Description,
    Link,
    Sampel,
    Position,
    GalleryTitle,
    Img,
};
