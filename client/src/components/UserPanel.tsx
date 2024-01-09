import React, { useState, useEffect } from 'react';
import { Wrapp, PageWrapper } from "../utils/styledComponents";
import { useAuthCheck } from "../hooks/useAuthCheck";
import styled from 'styled-components';
import { device } from '../utils/device';
import { useDispatch } from 'react-redux';
import { logoutUser, removeUserAction } from '../state/actions/accountActions';
import { Order, OrderProduct } from '../types/types';

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
    const { user } = useAuthCheck();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:3001/orders/${user!.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': user!.accessToken,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }

                const data = await response.json();
                
                setOrders(data.orders);
            } catch (error) {
                console.log(error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <UserPageWrapper>
            <Wrapper>
                <UserInfo>
                    <h2>User Information</h2>
                    <p>Username: {user?.name}</p>
                    <p>Email: {user?.mail}</p>
                    <DeleteUserButton onClick={() => dispatch(removeUserAction({ id: user!.id }))}>Delete User</DeleteUserButton>
                </UserInfo>
                <OrdersInfo>
                    {orders.map(order => (
                        <div key={order.OrderID} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}>Order ID: {order.OrderID}</p>
                            <p>Date: {order.OrderDate}</p>
                            <p>Total Price: {order.totalPrice}</p> 
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Product Name</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Price</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Quantity</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Total Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.products.map((product: OrderProduct) => (
                                        <tr key={product.id} style={{ border: '1px solid #ddd' }}>
                                            <td style={{ padding: '8px' }}>{product.name}</td>
                                            <td style={{ padding: '8px' }}>{product.price}</td>
                                            <td style={{ padding: '8px' }}>{product.quantity}</td>
                                            <td style={{ padding: '8px' }}>{product.totalValue}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}

                </OrdersInfo>

            </Wrapper>
            <LogoutButton onClick={() => dispatch(logoutUser())}>Logout</LogoutButton>
        </UserPageWrapper>
    );
};

export default UserPanel;
