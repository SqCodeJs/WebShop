import styled from "styled-components";
import { Link } from "react-router-dom";
import { hamburgerActions } from "../../../../actions/flagsActions";
import { device } from "../../../../utils/device";
import { useDispatch } from "react-redux";
import { NavigationList } from '../../../../types/types';

const Container = styled.div<{ toggle: boolean; }>`
    border: 2px solid #2d9ae8;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    background-color: rgb(255, 255, 255);
    z-index: 98;
  
    @media ${device.default} {
        width: 100%;
        top: 0;
        left: ${(props) => (props.toggle ? "0" : "-100%")};
    }

    @media ${device.tablet} {
        margin: 2% 0;
        display: flex;
        position: static;
        flex-grow: 0;
        border-radius: 30px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }

    @media ${device.laptop} {
        width: 20%;
        padding: 2%;
    }
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UlStyled = styled.ul`
    color: #666;
    width: 100%;list-style: none;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        flex-direction: row;
    }

    @media ${device.laptop} {
        flex-direction: column;
    }
`;

const LiStyled = styled.li`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2px;

    &:nth-last-child(1) {
        border-bottom: none;
    }

    @media ${device.default} {
        margin: 1%;
    }

    @media ${device.laptop} {
        margin: 2px;
        border-bottom: 1px solid rgb(169, 169, 169);
    }

    @media ${device.laptopL} {
        margin: 2%;
    }  

    &:hover {
        cursor: pointer;
    }
`;

const LinkStyl = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    text-decoration: none;
`;

const Column = styled.div`
    width: 0;
    flex-grow: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.mobileM} {
        display: flex;
        width: 80%;
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
    width: 100%;
    margin: 2px;
    color: #5b5b5b;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 10px;

    @media ${device.mobileS} {
        font-size: 14px;
    }

    @media ${device.tablet} {
        margin: 1px;
        font-size: 14px;
    }

    @media ${device.laptop} {
        margin: 4px 2px;
        font-size: 14px;
    }

    &:hover {
        cursor: pointer;
        color: #2d9ae8;
    }
`;

const Description = styled(Title)`
    display: none;
    width: 100%;
    margin-bottom: 2px;
    letter-spacing: 1px;
    font-family: Open Sans, sans-serif;
    color: rgb(169, 169, 169);

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
    width: 6%;
    margin: 2%;

    @media ${device.mobileM} {
        width: 6%;
        margin: 3%;
    }

    @media ${device.mobileL} {
        width: 5%;
        margin: 3%;
    }

    @media (min-width: 512px) {
        width: 4%;
        margin: 3%;
    }

    @media ${device.tablet} {
        width: 16%;
    }
  
    @media ${device.laptop} {
        width: 10%;
    }

    @media ${device.laptopL} {
        width: 10%;
    }
`;

interface Props {
    nav: NavigationList[];
    hamburger: boolean;
}

const RenderMainNavigation: React.FC<Props> = ({ nav, hamburger }) => {
    const dispatch = useDispatch();
    const navigation = nav.map((item) => (
        <LiStyled
            key={item.name}
            onClick={() => dispatch(hamburgerActions.toggle(!hamburger))}
        >
            <LinkStyl to={item.path}>
                <IconBox> {item.icon}</IconBox>
                <Column>
                    <Paragraf>{item.name}</Paragraf>
                    <Description>{item.description}</Description>
                </Column>
            </LinkStyl>
        </LiStyled>
    ));

    return (
        <>
            <Container toggle={hamburger}>
                <Nav>
                    <UlStyled>{navigation}</UlStyled>
                </Nav>
            </Container>
        </>
    );
};
export default RenderMainNavigation;
