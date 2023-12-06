import React from 'react';
import Navigation from '../../common/Navigation/components/Navigation';
import renderMainNavigation from '../../common/Navigation/render/renderMainNavigation';
import Slider from '../../Slider';
import styled from "styled-components";
import { device } from "../../../utils/device";
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers/rootReducer';
import Gallery from '../../Gallery';
import Columns from '../../Columns';
import LastAdd from '../../LastAdd';
import Newsletter from '../../Newsletter';
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
    const { flags } = useSelector((state: RootState) => state);
    const { navigation: isOpenNav } = flags;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Wrapp>
                {isOpenNav || !isMobile ? (<Navigation render={renderMainNavigation} />) : ''}
                <Slider />
            </Wrapp>
             <Gallery /> 
            <Columns />
            <Newsletter />
            <LastAdd />
        </div>
    );
};

export default Home;