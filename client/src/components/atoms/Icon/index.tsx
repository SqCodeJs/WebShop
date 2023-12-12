import React, { CSSProperties } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const CustomIcon = styled(FontAwesomeIcon)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

interface Props {
    icon: IconDefinition;
    style?: CSSProperties;
}

const Icon: React.FC<Props> = ({ icon, style, ...rest }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(767));

    return (
        <CustomIcon
            icon={icon}
            size={isMobile ? 'sm' : 'lg'}
            style={style}
            {...rest}
        />
    );
};

export default Icon;
