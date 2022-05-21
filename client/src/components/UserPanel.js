import React, { useState, useEffect } from "react";
import axios from "axios";
import { REDIRECT_LOGIN } from "./../constants/redirect";

import { Wrapp, Title } from "../utils/styledComponents";
import noAuthWrapper from "../auth/noAuthWrapper";

const UserPanel = ({ accessToken }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("MOUN");
    axios({
      method: "get",
      withCredentials: true,
      headers: {
        Authorization: accessToken,
      },
      url: "http://localhost:3001/login/current",
    })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
    return () => setUser({});
  }, []);

  return (
    <Wrapp>
      <Title>Witaj {user.name} </Title>
    </Wrapp>
  );
};

export default noAuthWrapper([REDIRECT_LOGIN])(UserPanel);
