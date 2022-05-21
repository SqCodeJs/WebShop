import { Redirect } from "react-router-dom";
const noAuthWrapper = (REDIRECT) => {
  console.log("R", REDIRECT);
  return (ProfilePage) => {
    return (props) => {
      console.log(props);
      const { isAuthenticated } = props;
      if (!isAuthenticated) {
        return <Redirect push to={`/${REDIRECT}`} />;
      }
      return <ProfilePage {...props} />;
    };
  };
};

export default noAuthWrapper;
