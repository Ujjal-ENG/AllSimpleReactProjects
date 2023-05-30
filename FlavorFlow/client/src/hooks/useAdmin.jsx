/* eslint-disable no-promise-executor-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const useAdmin = () => {
    const { userInfo } = useAuth();
    const token = localStorage.getItem('token');
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAmin', token],
        queryFn: async () => {
            if (!userInfo) return false;
            const { data } = await axios.get(`http://localhost:8080/users/admin/${userInfo?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return data.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
