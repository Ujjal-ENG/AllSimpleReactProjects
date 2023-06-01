/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';

const useMenuHooks = () => {
    const { userInfo, privateLoad } = useAuth();
    const {
        refetch,
        data: menuData = [],
        isLoading: loading
    } = useQuery({
        queryKey: ['menus'],
        enabled: !privateLoad,
        queryFn: async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/menu?email=${userInfo?.email}`);
                if (data.success) return data.data;
            } catch (error) {
                console.log(error);
            }
        }
    });
    return [menuData, loading, refetch];
};

export default useMenuHooks;
