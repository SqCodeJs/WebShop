import React, { useState, useEffect } from 'react';
import { Wrapp, PageWrapper } from "../utils/styledComponents";
import { useAuthCheck } from "../hooks/useAuthCheck";
import styled from 'styled-components';
import { device } from '../utils/device';
import { useDispatch } from 'react-redux';
import { logoutUser, removeUserAction, setCurrentUser } from '../state/actions/accountActions';
interface Order {
    id: number;
    product: string;
    date: string;
  }

const userOrders = [
  { id: 1, product: 'Product 1', date: '2023-01-01' },
  { id: 2, product: 'Product 2', date: '2023-01-02' },
  // ... inne zamówienia
];
const UserPageWrapper = styled(PageWrapper)`
width: 100%;
height: 100%;
  display: flex;
    flex-direction: column;
    padding-bottom: 40px;

`;
const Wrapper = styled(Wrapp)`
width: 100%;
height: 100%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  align-items: flex-start;
    }
`;

const UserInfo = styled.div`
    width: 100%;
    height: 100%;
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 16px;
  @media ${device.laptop} {
  margin-right: 20px;

    margin-bottom: 0;
  }
`;

const OrdersInfo = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #2d9ae8;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media ${device.laptop} {
    width: 6rem;
  }
`;

const DeleteUserButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #2d9ae8;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const UserPanel = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
      // Pobierz zamówienia z API (tu tylko symulacja)
      setOrders(userOrders);
    }, []);
    const { user } = useAuthCheck();
    return (
        <UserPageWrapper>
            <Wrapper>
                <UserInfo>
                    <h2>User Information</h2>
                    <p>Username: {user?.name}</p>
                    <p>Email: {user?.mail}</p>
                    <DeleteUserButton onClick={()=>dispatch(removeUserAction({id: user!.id}))}>Delete User</DeleteUserButton>
                </UserInfo>
                <OrdersInfo>
                    <h2>Last Orders</h2>
                        {orders.map(order => (
                            <div key={order.id}>
                                <p>Product: {order.product}</p>
                                <p>Date: {order.date}</p>
                            </div>
                        ))}
                </OrdersInfo>
            </Wrapper>
            <LogoutButton onClick={()=>dispatch(logoutUser())}>Logout</LogoutButton>
        </UserPageWrapper>
      );
};

export default UserPanel;
