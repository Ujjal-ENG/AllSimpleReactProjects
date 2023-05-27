/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useCart = () => {
    const { userInfo } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', userInfo?.email],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/carts?email=${userInfo.email}`);

            if (data.success) return data.data;
        }
    });
    return [cart, refetch];
};

export default useCart;
