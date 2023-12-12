import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers/rootReducer';
import { useNavigate } from 'react-router-dom';

export const useAuthCheck = () => {
    const account = useSelector((state: RootState) => state.account);
    const { isAuthenticated, user } = account;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return { isAuthenticated, user };
};
