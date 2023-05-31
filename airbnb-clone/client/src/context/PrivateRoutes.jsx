import { ImSpinner9 } from 'react-icons/im';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { userInfo, privateLoad } = useAuth();
    const location = useLocation();
    if (userInfo) {
        return children;
    }
    if (privateLoad) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <ImSpinner9 size={36} className="bg-red-500 animate-spin" />
            </div>
        );
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoutes;
