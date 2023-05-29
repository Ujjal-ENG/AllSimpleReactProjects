/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { userInfo, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', userInfo?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const { data } = await axios.get(`http://localhost:8080/carts?email=${userInfo.email}`, {
        //         headers: {
        //             Authorization: `Bearer ${localStorage.getItem('token')}`
        //         }
        //     });
        queryFn: async () => {
            const { data } = await axiosSecure(`/carts?email=${userInfo?.email}`);

            if (data.success) return data.data;
        }
    });
    return [cart, refetch];
};

export default useCart;
