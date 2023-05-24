import { useEffect, useState } from 'react';

const useMenuHooks = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setMenuData(data);
            });
    }, []);

    return [menuData, loading];
};

export default useMenuHooks;
