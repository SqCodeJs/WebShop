import React from "react";
import styled from "styled-components";
import renderMainNavigation from "./common/Navigation/render/renderMainNavigation";
import { device } from "../utils/device";
import PropTypes from "prop-types";
import Navigation from "./common/Navigation/components/Navigation";
import Slider from "./Slider";
import { connect } from "react-redux";
import { toggleFlag } from "../state/actions/flagsActions";

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

const Main = ({ hamburger }) => {
    return (
        <Wrapp>
            <Navigation hamburger={hamburger} render={renderMainNavigation} />
            <Slider />
        </Wrapp>
    );
};

const mapDispatchToProps = { toggleFlag };

const mapStateToProps = (state) => ({
    navigation: state.flags.navigation,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
