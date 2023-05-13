import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - The Car Physician`;
    }, [title]);
};

export default useTitle;
