/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const AllUser = () => {
    const token = localStorage.getItem('token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', token],
        queryFn: async () => {
            try {
                if (!token) return [];
                const { data } = await axiosSecure.get('/users');

                if (data.success) return data.data;
            } catch (error) {
                console.log(error);
            }
        }
    });
    return [users, refetch];
};

export default AllUser;
