import { useEffect, useState } from 'react';

const useMenuHooks = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8080/menu')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setMenuData(data.data);
            });
    }, []);

    return [menuData, loading];
};

export default useMenuHooks;
