import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { device } from "../../../../utils/device";
import { toggleFlag } from "../../../../state/actions/flagsActions";
import { RootState } from "../../../../state/reducers/rootReducer";

const HamburgerWrapp = styled.div`
  width: 30px;
  position: relative;
  /* border: 1px solid red; */
  background-color: transparent;

  height: 30px;
  top: -45px;
  @media ${device.tablet} {
    top: -47px;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const Span = styled.span<{ isOpenNav: boolean; }>`
  display: block;
  width: 100%;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background-color: rgb(169, 169, 169);
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;
  /* 
transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
  background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease; */

  &:nth-child(1) {
    transform-origin: 0% 0%;

    transform: ${(props) =>
        props.isOpenNav ? "rotate(45deg) translate(-2px, -1px)" : "rotate(0)"};
  }
  &:nth-last-child(2) {
    transform-origin: 0% 100%;
    opacity: ${(props) => (props.isOpenNav ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${(props) =>
        props.isOpenNav ? "rotate(-45deg) translate(-2px, -4px)" : "rotate(0) "};
  }
`;
const Button = styled.button`
  position: absolute;
  right: -42px;
  background-color: #2d9ae8;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  &:hover ${Span} {
  }
  @media ${device.mobileS} {
    width: 34px;
    height: 34px;
    left: -38px;
  }
  @media ${device.tablet} {
    width: 36px;
    height: 36px;
  }
  @media ${device.laptopL} {
    width: 46px;
    height: 46px;
    left: -50px;
  }
`;
const HamburgerButton = styled(Button) <{ isOpenNav: boolean; }>`
  position: absolute;
  background-color: transparent;

  left: 2px;
  top: 10px;
  display: block;
  transition: 0.5s;
  z-index: 99;
  @media ${device.default} {
    width: 30px;
    height: 30px;
    position: ${(props) => (props.isOpenNav ? "fixed" : "absolute")};
    left: ${(props) => (props.isOpenNav ? "93%" : "5px")};
    top: ${(props) => (props.isOpenNav ? "1%" : "4px")};
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const NavToggle = () => {
    const { navigation: isOpenNav } = useSelector((state: RootState) => state.flags);
    const dispatch = useDispatch();
    return (
        <HamburgerWrapp>
            <HamburgerButton
                isOpenNav={isOpenNav}
                onClick={() => dispatch(toggleFlag('navigation'))}
            >
                <Span isOpenNav={isOpenNav}></Span>
                <Span isOpenNav={isOpenNav}></Span>
                <Span isOpenNav={isOpenNav}></Span>
            </HamburgerButton>
        </HamburgerWrapp>
    );
};

export default NavToggle;
