import "typeface-roboto";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../utils/device";
const Wrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LiStyled = styled.li`
  width: 50%;
  padding: 1%;
  font-family: Roboto, sans-serif;

  /* line-height: 30px; */
  color: #444;

  list-style: none;
  cursor: pointer;

  &:hover {
    color: #2d9ae8;
  }
`;
const LinkStyl = styled(Link)`
  width: 100%;

  text-decoration: none;
  color: #666;

  transition: 0.3s;
  &:hover {
    color: #2d9ae8;
  }
`;

const Paragraf = styled.p`
  width: 100%;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 9px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;

function renderFooterNavigation({ nav }) {
  const navigation = nav.map((item) => (
    <LiStyled key={item.name}>
      <LinkStyl to={item.path}>
        <Paragraf>{item.name}</Paragraf>
      </LinkStyl>
    </LiStyled>
  ));
  return <Wrapper>{navigation}</Wrapper>;
}
export default renderFooterNavigation;
