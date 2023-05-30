/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const useCart = () => {
    const { userInfo, logOutUser, privateLoad } = useAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', userInfo?.email],
        enabled: !privateLoad,
        queryFn: async () => {
            // console.log(localStorage.getItem('token'));
            try {
                const { data } = await axios.get(`http://localhost:8080/carts?email=${userInfo?.email}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                // queryFn: async () => {
                //     const { data } = await axiosSecure(`/carts?email=${userInfo?.email}`);

                if (data.success) return data.data;
            } catch (error) {
                if (error.response.status >= 400) {
                    logOutUser();
                }
            }
        }
    });
    return [cart, refetch];
};

export default useCart;
