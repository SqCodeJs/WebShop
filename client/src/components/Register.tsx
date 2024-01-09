import React, { useState } from "react";
import {
    isMailCorrect,
    isPasswordCorrect,
    submitNewUser,
    validationUser,
} from "../helpers/functions";
import styled from "styled-components";
import { Wrapp, Container, Row, Radio } from "../utils/styledComponents";
import { device } from "../utils/device";
import { UserValiadationData } from "../types/types";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Icon from "./atoms/Icon";

const ContainerRegister = styled(Container)`
  padding: 10px 20px;
  width: 80%;
  flex-direction: column;

  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 50%;
  } ;
`;
const RowRegister = styled(Row)`
  width: 100%;
  display: flex;
  position: relative;

  align-items: center;
`;
const RadioRegister = styled(Radio)`
  align-self: center;
`;
const WrappRegister = styled(Wrapp)`
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px auto;
  font-family: Open Sans, sans-serif;
  font-weight: 100;
  font-size: 32px;
`;
const Paragraf = styled(Title)`
  margin: 10px 0;
  font-size: 18px;
`;
const Description = styled(Title)`
  width: 80%;
  font-size: 14px;
  letter-spacing: 1px;
  color: #767676;
  line-height: 16px;
`;
const Input = styled.input`
  width: 100%;
  margin: 10px 0%;
  padding: 10px;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid grey;
  &:focus {
    outline: none;
  }
`;
const RegisterParagraf = styled(Paragraf)`
  margin: 5px;
  padding: 5px;
  font-size: 20px;
  font-weight: 300;

  color: #2d9ae8;
`;
const Marked = styled.span<{ checked: string; }>`
  display: ${(props) =>
        props.checked.length > 2 || props.checked ? "block" : "none"};

  position: absolute;

  right: 2%;
  @media ${device.default} {
    width: 10%;
  }
  @media ${device.mobileM} {
    width: 9%;
  }
  @media ${device.mobileL} {
    width: 6%;
  }
  @media ${device.tablet} {
    width: 4%;
  }
`;
const PassChecked = styled(Marked) <{ checked: string; }>`
  display: ${(props) => (isPasswordCorrect(props.checked) ? "block" : "none")};
`;
const MatchedPass = styled.span<{ pass: string, confirmPass: string; }>`
  display: ${(props) =>
        props.pass === props.confirmPass && props.pass ? "block" : "none"};
  position: absolute;
  right: 2%;
  @media ${device.default} {
    width: 10%;
  }
  @media ${device.mobileM} {
    width: 9%;
  }
  @media ${device.mobileL} {
    width: 6%;
  }
  @media ${device.tablet} {
    width: 4%;
  }
`;
const Button = styled.button`
  margin: 10px;
  font-family: Open Sans, sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 100;
  width: 45%;
  padding: 10px;
  border: 1px solid grey;
  cursor: pointer;

  &:hover {
    background-color: #2d9ae8;
    color: white;
  }
`;
const UnderButton = styled(Button) <{ flag: boolean; }>`
  background-color: ${(props) => (props.flag === false ? "#2d9ae8" : "grey")};
`;
const AboveButton = styled(Button) <{ flag: boolean; }>`
  background-color: ${(props) => (props.flag === true ? "#2d9ae8" : "grey")};
`;

const Register = () => {
    const [data, setData] = useState<UserValiadationData>({ name: "", lastName: "", mail: "", password: "", confirmPassword: "" });
    const [reqisterInfo, setRegisterInfo] = useState({ message: "" });
    const [adultFlag, setAdultFlag] = useState(false);

    const setFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    async function registerProcedure() {
        if (Object.keys(data).length !== 5) {
            setRegisterInfo({ message: "wypełnij formularz" });
            return;
        }
        if (!adultFlag) {
            setRegisterInfo({ message: "Rejestracja tylko dla osób pełnoletnich." });
            return;
        }

        if (validationUser(data) && adultFlag) {
            await submitNewUser("http://localhost:3001/user/register", data).then(
                (res) => {
                    setRegisterInfo(res);
                }
            );
        }
        setData({ name: "", lastName: "", mail: "", password: "", confirmPassword: "" });
        setRegisterInfo({ message: "" });
    }

    return (
        <WrappRegister>
            <ContainerRegister>
                <Title>Zarejestruj</Title>
                <Paragraf>1. Dane do rejestracji</Paragraf>
                <RowRegister>
                    <Input
                        type="text"
                        placeholder="Imię"
                        name="name"
                        value={data.name || ""}
                        onChange={setFormData}
                    />
                    <Marked checked={data?.name || ""}>
                        <Icon icon={faCheckCircle} />
                    </Marked>
                </RowRegister>
                <RowRegister>
                    <Input
                        type="text"
                        placeholder="Nazwisko"
                        name="lastName"
                        value={data.lastName || ""}
                        onChange={setFormData}
                    />
                    <Marked checked={data?.lastName || ""}>
                        <Icon icon={faCheckCircle} />
                    </Marked>
                </RowRegister>
                <RowRegister>
                    <Input
                        type="text"
                        placeholder="mail"
                        value={data.mail || ""}
                        name="mail"
                        onChange={setFormData}
                    />
                    <Marked checked={String(isMailCorrect(data.mail)) || ""}>
                        <Icon icon={faCheckCircle} />
                    </Marked>
                </RowRegister>
                <RowRegister>
                    <Input
                        type="text"
                        placeholder="Hasło"
                        value={data.password || ""}
                        name="password"
                        onChange={setFormData}
                    />
                    <PassChecked checked={data?.password || ""}>
                        <Icon icon={faCheckCircle} />
                    </PassChecked>
                </RowRegister>
                <RowRegister>
                    <Input
                        type="text"
                        placeholder="Potwierdź hasło"
                        value={data.confirmPassword || ""}
                        name="confirmPassword"
                        onChange={setFormData}
                    />
                    <MatchedPass
                        pass={data.password || ""}
                        confirmPass={data.confirmPassword || ""}
                    >
                        <Icon icon={faCheckCircle} />
                    </MatchedPass>
                </RowRegister>
                <Paragraf>2. Twój wiek</Paragraf>
                <RowRegister>
                    <UnderButton flag={adultFlag ?? false} onClick={() => setAdultFlag(false)}>
                        Mam mniej niż 18 lat
                    </UnderButton>
                    <AboveButton flag={adultFlag ?? false} onClick={() => setAdultFlag(true)}>
                        Mam 18 lat i więcej
                    </AboveButton>
                </RowRegister>
                <Description>
                    Dzięki tej informacji możemy pokazać oferty odpowiednie dla Ciebie.
                </Description>
                <Paragraf>3. Zgody i oświadczenia</Paragraf>
                <RowRegister>
                    <RadioRegister type="radio" className="custom-radio" />
                    <Description>
                        <span>*</span>
                        Oświadczam, że znam i akceptuję postanowienia Regulaminu Sklep.
                    </Description>
                </RowRegister>
                <RowRegister>
                    <RadioRegister type="radio" className="custom-radio" />
                    <Description>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                        marketingowych i otrzymywanie informacji handlowych od Allegro z
                        wykorzystaniem telekomunikacyjnych urządzeń końcowych (m.in.
                        telefon) oraz środków komunikacji elektronicznej (m.in. SMS,
                        e-mail).
                    </Description>
                </RowRegister>
                <RowRegister>
                    <RadioRegister type="radio" className="custom-radio" />{" "}
                    <Description>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                        marketingowych i otrzymywanie informacji handlowych od podmiotów
                        współpracujących z Allegro z wykorzystaniem telekomunikacyjnych
                        urządzeń końcowych (m.in. telefon) oraz środków komunikacji
                        elektronicznej (m.in. SMS, e-mail).
                    </Description>
                </RowRegister>
                <Description>* Wymagane zgody lub oświadczenia.</Description>
                <RowRegister>
                    <Button onClick={registerProcedure}>Zarejestruj</Button>
                </RowRegister>
                <RegisterParagraf>
                    {reqisterInfo.message && reqisterInfo.message}
                </RegisterParagraf>
            </ContainerRegister>
        </WrappRegister>
    );
};

export default Register;
