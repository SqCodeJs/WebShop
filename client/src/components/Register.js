import React, { useState } from "react";
import {
  isMailCorrect,
  isPasswordCorrect,
  submitNewUser,
  validationUser,
} from "../helpers/functions";
import styled from "styled-components";
import { Wrapp, Container, Row, Radio } from "../utils/styledComponents";
import { checked } from "../utils/icon";
import { device } from "../utils/device";

import PropTypes from "prop-types";

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
const Marked = styled.span`
  display: ${(props) =>
    props.checked.length > 2 || props.checked === true ? "block" : "none"};

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
const PassChecked = styled(Marked)`
  display: ${(props) => (isPasswordCorrect(props.checked) ? "block" : "none")};
`;
const MatchedPass = styled.span`
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
const UnderButton = styled(Button)`
  background-color: ${(props) => (props.flag === false ? "#2d9ae8" : "grey")};
`;
const AboveButton = styled(Button)`
  background-color: ${(props) => (props.flag === true ? "#2d9ae8" : "grey")};
`;

const Register = () => {
  const [data, setData] = useState({});
  const [reqisterInfo, setRegisterInfo] = useState({});
  const [adultFlag, setAdultFlag] = useState(null);

  const setFormData = (e) => {
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
      await submitNewUser("http://localhost:3001/register", data).then(
        (res) => {
          console.log("Rejestracja", res);
          setRegisterInfo(res);
        }
      );
    }
    setData({});
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
          <Marked checked={data.name || 0}>{checked}</Marked>
        </RowRegister>
        <RowRegister>
          <Input
            type="text"
            placeholder="Nazwisko"
            name="lastName"
            value={data.lastName || ""}
            onChange={setFormData}
          />
          <Marked checked={data.lastName || 0}>{checked}</Marked>
        </RowRegister>
        <RowRegister>
          <Input
            type="text"
            placeholder="mail"
            value={data.mail || ""}
            name="mail"
            onChange={setFormData}
          />
          <Marked checked={isMailCorrect(data.mail) || 0}>{checked}</Marked>
        </RowRegister>
        <RowRegister>
          <Input
            type="text"
            placeholder="Hasło"
            value={data.password || ""}
            name="password"
            onChange={setFormData}
          />
          <PassChecked checked={data.password || 0}>{checked}</PassChecked>
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
            {checked}
          </MatchedPass>
        </RowRegister>
        <Paragraf>2. Twój wiek</Paragraf>
        <RowRegister>
          <UnderButton flag={adultFlag} onClick={() => setAdultFlag(false)}>
            Mam mniej niż 18 lat
          </UnderButton>
          <AboveButton flag={adultFlag} onClick={() => setAdultFlag(true)}>
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

Register.propTypes = {
  data: PropTypes.object,
  reqisterInfo: PropTypes.object,
  setReqisterInfo: PropTypes.func,
  adultFlag: PropTypes.bool,
  setAdultFlag: PropTypes.func,
};
export default Register;
