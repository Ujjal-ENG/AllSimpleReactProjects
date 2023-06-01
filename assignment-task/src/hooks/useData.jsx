/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useData = () => {
    const {
        refetch,
        data: datas = [],
        isLoading
    } = useQuery({
        queryKey: ['datas'],
        queryFn: async () => {
            try {
                const { data } = await axios.get('/public/jsondata.json');
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    });
    return [refetch, datas, isLoading];
};

export default useData;
