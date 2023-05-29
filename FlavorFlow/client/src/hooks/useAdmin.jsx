/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const useAdmin = () => {
    const { userInfo, loading } = useAuth();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAmin'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/users/admin/${userInfo.email}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return data.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
