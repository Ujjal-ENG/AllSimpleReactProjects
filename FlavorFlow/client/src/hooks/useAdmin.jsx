/* eslint-disable no-promise-executor-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { userInfo } = useAuth();
    const token = localStorage.getItem('token');
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAmin', token, userInfo?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/admin/${userInfo?.email}`);
            return data.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
