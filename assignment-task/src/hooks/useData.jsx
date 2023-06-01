/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useData = () => {
    const { refetch, datas = [] } = useQuery({
        queryKey: ['data'],

        queryFn: async () => {
            try {
                const { data } = await axios.get('/assignment-task/public/jsondata.json');
                if (data) return data;
            } catch (error) {
                console.log(error);
            }
        }
    });
    return [refetch, datas];
};

export default useData;
