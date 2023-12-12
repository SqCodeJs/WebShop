import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { device } from '../../../../utils/device';
import { useSelector } from 'react-redux';
import { NavigationList } from '../../../../types/types';
import { RootState } from '../../../../state/reducers/rootReducer';
import Icon from '../../../atoms/Icon';
import { Typography, useMediaQuery, useTheme } from '@mui/material';

const appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(10px);
    }
`;

const Container = styled.div<{ isOpenNav: boolean; isHome: boolean }>`
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fafafa;
    transition: height 0.3s ease;
    z-index: 2;
    background-color: #3aa0e9;

    @media ${device.tablet} {
        display: flex;
        margin-bottom: 16px;
        position: static;
        flex-grow: 0;
        border-radius: 30px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        background-color: unset;
    }

    @media ${device.laptop} {
        width: ${({ isHome }) => (isHome ? '25%' : '100%')};
        padding: ${({ isHome }) => (isHome ? '20px 10px' : '0')};
        margin: 0;
    }
`;

const UlStyled = styled.ul<{ isHome: boolean }>`
    color: white;
    width: 100%;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    @media ${device.tablet} {
        flex-direction: row;
        color: #3aa0e9;
        padding: 0 12px;
    }

    @media ${device.laptop} {
        flex-direction: ${({ isHome }) => (isHome ? 'column' : 'row')};
    }
`;

const LiStyled = styled.li<{ isHome: boolean }>`
    width: 95%;
    display: flex;
    justify-content: flex-start;
    margin: 10px 0;
    border-bottom: 1px solid white;
    animation: 1s ${appear} forwards;

    &:nth-last-child(1) {
        border-bottom: none;
    }

    @media ${device.tablet} {
        width: auto;
        flex-grow: 1;
    }

    @media ${device.laptop} {
        margin: ${({ isHome }) => (isHome ? '2px' : 'row')};
    }

    &:hover {
        cursor: pointer;
    }
`;

const LinkStyl = styled(Link) <{ delay: number }>`
    display: flex;
    align-items: center;
    background-color: transparent;
    text-decoration: none;
    padding: 4px 0;
    animation: 0.5s ${slideIn} forwards;
    animation-delay: ${(props) => (props.delay ? `${props.delay}s` : '')};

    &:visited {
        color: unset;
    }
`;

const Column = styled.div`
    flex-grow: 0;
    flex-direction: column;
    color: #ffffff;

    &:hover {
        color: #e8e1e1;
    }

    @media ${device.tablet} {
        color: #818181;

        &:hover {
        color: #1684d3;
    }
    }
`;

const IconBox = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 20px;

    @media ${device.tablet} {
        margin-right: 10px;

        & > svg {
            color: #3aa0e9 !important;
        }
    }

    @media ${device.laptop} {
        margin-right: 20px;
    }
`;

interface Props {
    nav: NavigationList[];
}

const RenderMainNavigation: React.FC<Props> = ({ nav }) => {
    const { navigation: isOpenNav } = useSelector(
        (state: RootState) => state.flags,
    );
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const isHome = location.pathname === '/';

    const navigation = nav.map((item, index) => (
        <LiStyled isHome={isHome} key={item.name}>
            <LinkStyl to={item.path} delay={index * 0.1}>
                <IconBox>
                    <Icon icon={item.icon} />
                </IconBox>
                <Column>
                    <Typography variant="body1">{item.name}</Typography>
                    {isMobile && (
                        <Typography variant="body2">
                            {item.description}
                        </Typography>
                    )}
                </Column>
            </LinkStyl>
        </LiStyled>
    ));

    return (
        <Container className="container" isOpenNav={isOpenNav} isHome={isHome}>
            <UlStyled isHome={isHome}>{navigation}</UlStyled>
        </Container>
    );
};

export default RenderMainNavigation;
