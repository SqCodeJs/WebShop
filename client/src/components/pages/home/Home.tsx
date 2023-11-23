import React from 'react';
import Navigation from '../../common/Navigation/components/Navigation';
import renderMainNavigation from '../../common/Navigation/render/renderMainNavigation';
import Slider from '../../Slider';
import styled from "styled-components";
import { device } from "../../../utils/device";
import NavToggle from '../../common/Navigation/components/NavToggle';

const Wrapp = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media ${device.default} {
    padding: 10px;
  }
  @media ${device.tablet} {
    padding: 0;
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  @media ${device.laptopL} {
    margin: 0 auto;
    width: 95%;
  }
`;

const Home = () => {
    return (
        <>
            <NavToggle />
            <Wrapp>
                <Navigation render={renderMainNavigation} />
                <Slider />
            </Wrapp>
        </>
    );
};

export default Home;