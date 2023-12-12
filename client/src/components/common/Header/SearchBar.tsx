import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { PageWrapper } from '../../../utils/styledComponents';
import { device } from '../../../utils/device';
import Autocomplete from './Autocomplete';
import { RootState } from '../../../state/reducers/rootReducer';
import { Item } from '../../../../../shared/types/commonTypes';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Container = styled('div')`
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.paper};
    position: fixed;
    top: 48px;
    left: 0;
    z-index: 999;
    border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};

    @media ${device.tablet} {
        position: static;
        background-image: linear-gradient(
            to right,
            #21a2fd,
            #7967fe 50%,
            #21a2fd
        );
        background-repeat: no-repeat;
    }
`;

const InnerWraper = styled(PageWrapper)`
    display: flex;
    justify-content: end;
`;

const Input = styled('input')<{ borderBottom: string }>`
    width: 100%;
    font-family: Roboto, sans-serif;
    border: none;
    padding-left: 20px;
    color: rgb(128, 128, 128);
    letter-spacing: 1px;
    border-radius: ${(props) =>
        props.borderBottom.length > 2 ? ' 10px 10px 0 0' : '30px'};

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

const SearchBox = styled('div')`
    width: 100%;
    display: flex;
    position: relative;
    padding: 10px 0;

    @media ${device.tablet} {
        width: 60%;
    }

    @media ${device.laptopL} {
        width: 50%;
    }
`;

const SearchBar = () => {
    const { products, flags } = useSelector((state: RootState) => state);
    const [suggestionList, setSuggestionList] = useState<Item[]>([]);
    const [input, setInput] = useState('');
    const { search: isSearchOpen } = flags;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const setAutocompleteList = (inputValue: string) => {
        const finalElements = products.items.filter((elem: Item) =>
            elem.title.toLowerCase().includes(inputValue.toLowerCase()),
        );

        setSuggestionList(finalElements);
    };

    useEffect(() => setAutocompleteList(input), [input]);

    return (
        <>
            {isSearchOpen || !isMobile ? (
                <Container className="wrapper">
                    <InnerWraper>
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
                    </InnerWraper>
                </Container>
            ) : (
                ''
            )}
        </>
    );
};

export default SearchBar;
