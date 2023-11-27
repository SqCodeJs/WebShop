import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../utils/device";
import { useSelector } from "react-redux";
import { NavigationList } from '../../../../types/types';
import { RootState } from "../../../../state/reducers/rootReducer";

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

const Container = styled.div<{ isOpenNav: boolean; }>`
    position: absolute;
    top: 48px;
    left:0;
    right: 0;
    bottom:0;
    width: 100%;
    display: flex;
    flex-direction: column;
    color:#fafafa;
    transition: height 0.3s ease;
    z-index: 2;
    background-color: #3aa0e9;
    z-index: 2;

    @media ${device.tablet} {
        padding: 10px 0;
        display: flex;
        position: static;
        flex-grow: 0;
        border-radius: 30px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        background-color: unset;

    }

    @media ${device.laptop} {
        width: 20%;
        padding: 2%;
    } 
`;

const UlStyled = styled.ul`
    color: white;
    width: 100%;
    list-style: none;
    padding: 20px 5px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    @media ${device.tablet} {
        flex-direction: row;
        color: #3aa0e9;
        padding: 0 12px;

    }

    @media ${device.laptop} {
        flex-direction: column;
    }
`;

const LiStyled = styled.li`
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
        margin: 2px;
        border-bottom: 1px solid rgb(169, 169, 169);
    }

    &:hover {
        cursor: pointer;
    }
`;

const LinkStyl = styled(Link) <{ delay: number; }>`
    display: flex;
    align-items: center;
    background-color: transparent;
    text-decoration: none;
    padding: 4px 0;
    animation: 0.5s ${slideIn} forwards;
    animation-delay: ${(props) => (props.delay ? `${props.delay}s` : '')};
`;

const Column = styled.div`
    flex-grow: 0;
    flex-direction: column;
    color: #ffffff;

    &:hover {
        color: #ece8e8
    }
    @media ${device.tablet} {
        color: #3aa0e9;
    }
`;

const Title = styled.h2`
    font-family: Roboto, sans-serif;
    font-weight: 100;

    @media ${device.tablet} {
        font-size: 16px;
    }
`;

const Paragraf = styled(Title)`
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 10px;

    @media ${device.mobileS} {
        font-size: 14px;
    }

    @media ${device.tablet} {
        margin: 1px;
        font-size: 12px;
    }

    @media ${device.laptop} {
        margin: 4px 2px;
        font-size: 14px;
    }
`;

const Description = styled(Title)`
    display: none;
    margin-bottom: 2px;
    letter-spacing: 1px;

    @media ${device.mobileM} {
        display: block;
        font-size: 12px;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.laptop} {
        display: block;
        font-size: 12px;
    }

    @media ${device.laptopL} {
        margin-bottom: 10px;
        font-size: 14px;
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
`;

interface Props {
    nav: NavigationList[];
}

const RenderMainNavigation: React.FC<Props> = ({ nav }) => {
    const { navigation: isOpenNav } = useSelector((state: RootState) => state.flags);

    const navigation = nav.map((item, index) => (
        <LiStyled
            key={item.name}
        >
            <LinkStyl to={item.path} delay={index * 0.1}>
                <IconBox>{item.icon}</IconBox>
                <Column>
                    <Paragraf>{item.name}</Paragraf>
                    <Description>{item.description}</Description>
                </Column>
            </LinkStyl>
        </LiStyled>
    ));

    return (
        <Container isOpenNav={isOpenNav}>
            <UlStyled>{navigation}</UlStyled>
        </Container>
    );
};

export default RenderMainNavigation;
