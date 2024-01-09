import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Wrapp, Container, Row, Title } from "../utils/styledComponents";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../state/actions/accountActions";
import { RootState } from "../state/reducers/rootReducer";

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

const Login = () => {
    const loginMessage = useSelector((state: RootState) => state.message.loginInfo);
    const [data, setData] = useState<{ mail: string; password: string; }>({ mail: "tomek.bilka@gmail.com", password: "qwerty123Q" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setFormData = (e: ChangeEvent<HTMLInputElement>) =>
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
                    onClick={async () => {
                        try {
                            await dispatch(loginAction(data));
                            setData({ mail: "", password: "" });
                            navigate('/userpanel');
                    } catch(e) {
                        console.log(e)
                    }
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

export default Login;
