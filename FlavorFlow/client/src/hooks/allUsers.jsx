/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AllUser = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8080/users');

            if (data.success) return data.data;
        }
    });
    return [users, refetch];
};

export default AllUser;
