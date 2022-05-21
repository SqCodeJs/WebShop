import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlender,
  faCamera,
  faClock,
  faGamepad,
  faHeadphones,
  faLaptop,
  faMobileAlt,
  faSignInAlt,
  faShoppingBag,
  faSearch,
  faTrashAlt,
  faCheckCircle,
  faUser,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ fontAwesomeIcon = faGamepad, style = {}, ...rest }) => {
  const finalStyle = {
    margin: "0",
    ...style,
  };
  return (
    <FontAwesomeIcon icon={fontAwesomeIcon} style={finalStyle} {...rest} />
  );
};
const iconStyled = {
  width: "100%",
  height: "100%",
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  color: "rgb(169, 169, 169)",
};

const laptop = <Icon icon={faLaptop} style={iconStyled} />;
const electronics = <Icon icon={faBlender} style={iconStyled} />;
const phone = <Icon icon={faMobileAlt} style={iconStyled} />;
const game = <Icon icon={faGamepad} style={iconStyled} />;
const audio = <Icon icon={faHeadphones} style={iconStyled} />;
const watch = <Icon icon={faClock} style={iconStyled} />;
const camera = <Icon icon={faCamera} style={iconStyled} />;
const call = <Icon icon={faPhone} style={iconStyled} />;
const mail = <Icon icon={faEnvelope} style={iconStyled} />;
const spot = <Icon icon={faMapMarkerAlt} style={iconStyled} />;
const checked = (
  <FontAwesomeIcon
    icon={faCheckCircle}
    style={{
      width: "100%",
      height: "100%",
      background: "transparent",
      color: "green",
    }}
  />
);
const singUp = (
  <FontAwesomeIcon
    icon={faSignInAlt}
    style={{
      width: "100%",
      height: "100%",
      //   backgroundColor: "rgb(255,255,255)",
    }}
  />
);
const user = (
  <FontAwesomeIcon
    icon={faUser}
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "rgb(255,255,255)",
    }}
  />
);
const shoppBag = (
  <FontAwesomeIcon
    icon={faShoppingBag}
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "rgb(255,255,255)",
    }}
  />
);

const search = (
  <FontAwesomeIcon
    icon={faSearch}
    style={{
      width: "100%",
      height: "100%",
      background: "transparent",
      color: "rgb(220,220,220)",
    }}
  />
);
const trash = (
  <FontAwesomeIcon
    icon={faTrashAlt}
    style={{
      width: "100%",
      height: "100%",
      background: "transparent",
      color: "red",
    }}
  />
);

export {
  laptop,
  electronics,
  phone,
  game,
  audio,
  watch,
  camera,
  singUp,
  shoppBag,
  search,
  trash,
  checked,
  user,
  call,
  mail,
  spot,
};
export default Icon;
