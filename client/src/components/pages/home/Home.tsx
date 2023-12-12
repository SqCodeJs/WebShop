import React from 'react';
import Gallery from '../../Gallery';
import Columns from '../../Columns';
import { PageWrapper } from '../../../utils/styledComponents';

const Home = () => {
    return (
        <PageWrapper>
            <Gallery />
            <Columns />
        </PageWrapper>
    );
};

export default Home;
