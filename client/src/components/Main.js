import React from "react";
import styled from "styled-components";
import renderMainNavigation from "./common/Navigation/render/renderMainNavigation";
import { device } from "../utils/device";
import PropTypes from "prop-types";
import Navigation from "./common/Navigation/components/Navigation";
import Slider from "./Slider";
import { connect } from "react-redux";
import { hamburgerActions } from "../actions/flagsActions";

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

Main.propTypes = {
  hamburger: PropTypes.bool,
};
const mapDispatchToProps = { hamburgerActions };
const mapStateToProps = (state) => ({
  hamburger: state.flags.hamburger,
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
