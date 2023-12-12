import React from "react";
import "typeface-roboto";
import styled from "styled-components";
import { Title } from "../../../utils/styledComponents";
import Navigation from "../../common/Navigation/components/Navigation";
import renderCategoriesNavigation from "../../common/Navigation/render/renderCategoriesNavigation";
import { device } from "../../../utils/device";
import { Item } from "../../../../../shared/types/commonTypes";

const LiStyled = styled.li`
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
    }
`;

const Container = styled.div`
    padding: 2%;
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
`;

const Nav = styled.nav`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

const UlStyled = styled.ul`
    width: 90%;
`;

const Squre = styled.div`
    width: 10px;
    height: 10px;
`;

const Categories = styled(Title)`
    text-align: center;
  
    @media ${device.mobileS} {
        font-size: 16px;
    }

    @media ${device.mobileM} {
        font-size: 18px;
    }

    @media ${device.mobileL} {
        font-size: 24px;
    }

    @media ${device.tablet} {
        font-size: 30px;
    }

    @media ${device.laptop} {
        font-size: 36px;
    }

    @media ${device.laptopL} {
        font-size: 42px;
    }
`;

const ColorElement = styled.p`
    font-size: 12px;
    @media ${device.mobileM} {
        font-size: 14px;
    }

    @media ${device.tablet} {
        font-size: 16px;
    }

    @media ${device.laptop} {
        font-size: 18px;
    }

    @media ${device.laptopL} {
        font-size: 20px;
    }
`;

interface Props {
    DB: Item[];
    productsList: Item[];
    setFilterProducts: React.Dispatch<React.SetStateAction<Item[]>>;
    price: number;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
}
const FilterSide: React.FC<Props> = ({
    DB,
    productsList,
    setFilterProducts,
    price,
    setPrice,
}) => {
    const colors = [
        { color: "black", style: { backgroundColor: "black" } },
        { color: "white", style: { backgroundColor: "white" } },
        { color: "yellow", style: { backgroundColor: "yellow" } },
    ];
    const colorList = colors.map((element) => (
        <LiStyled
            key={element.color}
            onClick={() =>
                setFilterProducts(productsList.filter((e) => e.color === element.color))
            }
        >
            <Squre style={element.style}></Squre>
            <ColorElement>{element.color}</ColorElement>
        </LiStyled>
    ));

    return (
        <Container>
            <Categories>Categories</Categories>
            <Nav>
                <UlStyled>
                    <Navigation
                        //DB={DB}
                        //productsList={productsList}
                        //setFilterProducts={setFilterProducts}
                        render={renderCategoriesNavigation}
                    />
                </UlStyled>
            </Nav>
            <Categories>Filter Color</Categories>
            <UlStyled>{colorList}</UlStyled>
            <Categories>Filter Price</Categories>
            <input
                type="range"
                min="1"
                max="100"
                step="5"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
            ></input>
            {price}
        </Container>
    );
};

export default FilterSide;
