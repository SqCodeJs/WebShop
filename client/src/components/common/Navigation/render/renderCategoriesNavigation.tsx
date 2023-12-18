import * as React from 'react';
import 'typeface-roboto';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../../../utils/device';
import { NavigationList } from '../../../../types/types';

const NaviWrapp = styled.div`
    width: 100%;
`;

const LiStyled = styled.li`
    width: 100%;
    padding: 1px;
    font-family: Roboto, sans-serif;
    color: #444;
    list-style: none;
    cursor: pointer;

    &:hover {
        color: #2d9ae8;
        background-color: rgba(0, 0, 0, 0.04);
    }

    @media ${device.default} {
        font-size: 12px;
        align-items: center;
    }

    @media ${device.tablet} {
        font-size: 16px;
    }

    @media ${device.laptop} {
        font-size: 22px;
        line-height: 30px;
        padding: 5px;
        font-weight: 400;
    }
`;

const LinkStyl = styled(Link)`
    width: 100%;
    padding: 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #666;
    transition: 0.3s;

    &:hover {
        color: #2d9ae8;
    }
`;

const Paragraf = styled.p`
    width: 100%;
    font-size: 12px;

    @media ${device.tablet} {
        font-size: 14px;
    }
 `;

interface Props {
    nav: NavigationList[];
}

const RenderCategoriesNavigation: React.FC<Props> = ({ nav }) => {
    const navigation = nav.map((item) => (
        <LiStyled key={item.name} value={item.name}>
            <LinkStyl to={item.path}>
                <Paragraf>{item.name}</Paragraf>
            </LinkStyl>
        </LiStyled>
    ));

    return (
        <NaviWrapp>{navigation}</NaviWrapp>
    );
};

export default RenderCategoriesNavigation;
