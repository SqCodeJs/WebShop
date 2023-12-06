import React, { useEffect } from 'react';
import { RootState } from '../state/reducers/rootReducer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RequireAuth = <P extends {}>(Component: React.ComponentType<P>) => {

    const WrapperComponent = (props: P) => {
        const account = useSelector((state: RootState) => state.account);
        const { isAuthenticated } = account;
        const navigate = useNavigate();

        useEffect(() => {
            if (!isAuthenticated) {
                navigate('/login');
            }
        }, [isAuthenticated, navigate]);

        return isAuthenticated ? <Component {...props} /> : null;
    };

    return WrapperComponent;
};

export default RequireAuth;
