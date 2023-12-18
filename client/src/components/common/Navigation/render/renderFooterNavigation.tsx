import "typeface-roboto";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavigationList } from '../../../../types/types';

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
    padding: 8px 0;
    font-family: Roboto, sans-serif;
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
    font-size: 14px;
`;

interface Props {
    nav: NavigationList[];    
}

const renderFooterNavigation: React.FC<Props> = ({ nav }) => {
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
