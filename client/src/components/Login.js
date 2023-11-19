import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapp, Container, Row, Title } from "../utils/styledComponents";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector, connect } from "react-redux";
import axios from "axios";
import { loginAction } from "../state/actions/accountActions";
import { withRouter, useHistory } from "react-router-dom";
import AuthWrapper from "../auth/AuthWrapper";
import { REDIRECT_USER_PANEL } from "./../constants/redirect";

const WrappLogin = styled(Wrapp)`
  width: 100%;
  height: 100%;
  flex-direction: column;

  justify-content: stretch;
`;
const ContainerLogin = styled(Container)`
  padding: 10px 20px;
  width: 40%;
  justify-self: stretch;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
`;
const RowLogin = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;
const TitleLogin = styled(Title)`
  margin: 10px auto;
  font-family: Open Sans, sans-serif;
  font-size: 32px;
`;
const Input = styled.input`
  width: 100%;
  margin: 10px 0%;
  padding: 10px;
  font-size: 14px;
  line-height: 24px;
  border: 1.5px solid grey;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 60%;
  margin: 10px 0 0 40%;

  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 100;

  padding: 10px;
  border: 1.5px solid grey;

  cursor: pointer;
  &:hover {
    background-color: #2d9ae8;
    color: white;
  }
`;
const LinkStyled = styled(Link)`
  background-color: transparent;
  text-decoration: none;
`;
const RegisterButton = styled(Button)`
  width: 100%;
  margin: 5px;
  border: 1px solid #2d9ae8;
  color: #2d9ae8;
`;
const Paragraf = styled.p`
  font-family: Open Sans, sans-serif;
  font-weight: 100;
  font-size: 16px;
  color: #767676;
`;
const LoginParagraf = styled(Paragraf)`
  margin: 5px;
  padding: 5px;
  font-size: 20px;
  font-weight: 300;

  color: #2d9ae8;
`;
const Login = ({ history }) => {
    const loginMessage = useSelector((state) => state.message.loginMessage);
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const a = useHistory();

    //   console.log("useParams", a);
    const setFormData = (e) =>
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    return (
        <WrappLogin>
            <ContainerLogin>
                <TitleLogin>Zaloguj się</TitleLogin>
                <Input
                    type="text"
                    placeholder="Mail"
                    name="mail"
                    value={data.mail || ""}
                    onChange={setFormData}
                />
                <Input
                    type="password"
                    placeholder="Hasło"
                    name="password"
                    value={data.password || ""}
                    onChange={setFormData}
                />

                <Button
                    onClick={() => {
                        dispatch(loginAction(data)).then(
                            (res) => {
                                history.goBack();
                            },
                            (err) => { }
                        );

                        setData({});
                    }}
                >
                    Zaloguj się
                </Button>
                <LoginParagraf>{loginMessage}</LoginParagraf>
                <RowLogin>
                    <Paragraf>Nie masz konta?</Paragraf>
                    <LinkStyled to="/register">
                        <RegisterButton>ZAREJESTRUJ SIĘ</RegisterButton>
                    </LinkStyled>
                </RowLogin>
            </ContainerLogin>
        </WrappLogin>
    );
};

Login.propTypes = {
    data: PropTypes.object,
    setData: PropTypes.func,
    log: PropTypes.object,
    setLog: PropTypes.func,
};
export default withRouter(AuthWrapper([REDIRECT_USER_PANEL])(Login));
