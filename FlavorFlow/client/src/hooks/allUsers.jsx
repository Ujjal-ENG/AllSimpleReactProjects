/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AllUser = () => {
    const token = localStorage.getItem('token');
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', token],
        queryFn: async () => {
            if (!token) return [];

            const { data } = await axios.get('http://localhost:8080/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (data.success) return data.data;
        }
    });
    return [users, refetch];
};

export default AllUser;
