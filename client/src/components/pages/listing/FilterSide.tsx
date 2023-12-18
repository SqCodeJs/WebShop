import React from 'react';
import 'typeface-roboto';
import styled from 'styled-components';
import Navigation from '../../common/Navigation/components/Navigation';
import renderCategoriesNavigation from '../../common/Navigation/render/renderCategoriesNavigation';
import { device } from '../../../utils/device';
import { Item } from '../../../../../shared/types/commonTypes';
import { Typography} from '@mui/material';
import Slider from '@mui/material/Slider';

const LiStyled = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 30px;
    color: #444;
    font-weight: 400;
    list-style: none;
    cursor: pointer;

    &:hover {
        color: #2d9ae8;
        background-color: rgba(0, 0, 0, 0.04);
    }
`;

const Container = styled.aside`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 2px solid #2d9ae8;
    background-color: #f3f3f3;
    border-radius: 30px;
    box-shadow: 0 0 1em rgb(220, 220, 220);

    @media ${device.tablet} {
        width: 30%;
        flex-direction: column;
    }
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

const UlStyled = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

const Squre = styled.div`
    width: 10px;
    height: 10px;
    border: 0.5px solid #666;
`;

const ColorElement = styled.p`
    font-size: 12px;
    width: 70%;

    @media ${device.tablet} {
        font-size: 14px;
    }
`;

const Element = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
        display: block;
        width: 100%;
    }
`;

interface Props {
    DB: Item[];
    productsList: Item[];
    setFilterProducts: React.Dispatch<React.SetStateAction<Item[]>>;
    price: number[];
    handlePriceChange: (event: Event, newValue: number | number[]) => void;
}

const FilterSide: React.FC<Props> = ({
    DB,
    productsList,
    setFilterProducts,
    price,
    handlePriceChange,
}) => {
    const colors = [
        { color: 'black', style: { backgroundColor: 'black' } },
        { color: 'white', style: { backgroundColor: 'white' } },
        { color: 'yellow', style: { backgroundColor: 'yellow' } },
    ];

    const colorList = colors.map((element) => (
        <LiStyled
            key={element.color}
            onClick={() =>
                setFilterProducts(
                    productsList.filter((e) => e.color === element.color),
                )
            }
        >
            <Squre style={element.style}></Squre>
            <ColorElement>{element.color}</ColorElement>
        </LiStyled>
    ));

    return (
        <Container>
            <Element>
                <Typography variant="h5" color="#666" style={{ padding: '16px 0' }}>
                    Categories
                </Typography>
                <Nav>
                    <UlStyled>
                        <Navigation
                            render={renderCategoriesNavigation}
                        />
                    </UlStyled>
                </Nav>
            </Element>
            <Element>
                <Typography variant="h5" color="#666" style={{ padding: '16px 0' }}>
                    Filter Color
                </Typography>
                <UlStyled>{colorList}</UlStyled>
            </Element>
            <Element>
                <Typography variant="h5" color="#666" style={{ padding: '16px 0' }}>
                    Filter Price
                </Typography>
                <Slider
                    style={{ color: '#2d9ae8', width: '50%',position: 'relative', left: '12px' }}
                    getAriaLabel={() => 'Price Range'}
                    value={price}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={() => `${price}`}
                    min={100}
                    max={10000}
                    step={100}
                />
            </Element>
        </Container>
    );
};

export default FilterSide;
