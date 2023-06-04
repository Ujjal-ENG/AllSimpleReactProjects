/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { userInfo } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts'],
        enabled: !!userInfo?.email && !!localStorage.getItem('token'),
        queryFn: async () => {
            try {
                const { data } = await axiosSecure.get(`/carts?email=${userInfo?.email}`);
                if (data.success) return data.data;
            } catch (error) {
                console.log(error);
            }
        }
    });

    return [cart, refetch];
};

export default useCart;
