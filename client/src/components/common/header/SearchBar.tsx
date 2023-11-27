import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Wrapp } from "../../../utils/styledComponents";
import { device } from "../../../utils/device";
import Autocomplete from "./Autocomplete";
import { RootState } from "../../../state/reducers/rootReducer";
import { Item } from "../../../../../shared/types/commonTypes";

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  @media ${device.default} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
`;
const Wrapper = styled(Wrapp)`
  width: 100%;
  margin: 0 auto;

  background-image: linear-gradient(to right, #21a2fd, #7967fe 50%, #21a2fd);
  background-repeat: no-repeat;

  @media ${device.mobileS} {
    height: 56px;
    width: 100%;
  }
  @media ${device.tablet} {
    height: 60px;
    /* width: 95%; */
  }
  @media ${device.laptop} {
    width: 90%;
    border-radius: 30px;
  }
  @media ${device.laptopL} {
    border-radius: 0;
    height: 65px;
    width: 100%;
  }
`;
const Input = styled.input<{ borderBottom: string; }>`
  width: 100%;
  font-family: Roboto, sans-serif;
  border: none;
  padding-left: 20px;
  color: rgb(128, 128, 128);
  letter-spacing: 1px;
  border-radius: ${(props) =>
        props.borderBottom.length > 2 ? " 10px 10px 0 0" : "30px"};
  &:focus {
    outline: none;
  }

  @media ${device.mobileS} {
    font-size: 12px;
    line-height: 36px;
  }
  @media ${device.mobileM} {
    font-size: 13px;
    line-height: 38px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    line-height: 40px;
  }
  @media ${device.tablet} {
    font-size: 15px;
    line-height: 42px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    line-height: 44px;
  }
  @media ${device.laptopL} {
    font-size: 17px;
    line-height: 46px;
  }
`;

const SearchBox = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  @media ${device.mobileS} {
    width: 80%;
    margin-right: 6%;
  }
  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 50%;
    margin-right: 3%;
  }
`;

const SearchBar = () => {
    const products = useSelector((state: RootState) => state.products);
    const [suggestionList, setSuggestionList] = useState<Item[]>([]);
    const [input, setInput] = useState("");

    const setAutocompleteList = (inputValue: string) => {
        const finalElements = products.items.filter((elem: Item) =>
            elem.title.toLowerCase().includes(inputValue.toLowerCase())
        );

        setSuggestionList(finalElements);
    };

    useEffect(() => setAutocompleteList(input), [input]);

    return (
        <Wrapper>
            <Container>
                <SearchBox>
                    <Input
                        type="text"
                        name=""
                        id=""
                        placeholder="search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        borderBottom={input}
                    />

                    <Autocomplete
                        input={input}
                        setInput={setInput}
                        suggestionList={suggestionList}
                    />
                </SearchBox>
            </Container>
        </Wrapper>
    );
};

export default SearchBar;
