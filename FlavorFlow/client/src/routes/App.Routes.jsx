/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/layouts/DashBoardLayout/Dashboard';
import AddItem from '../components/pages/AdminDashboard/AddItem';
import AdminHome from '../components/pages/AdminDashboard/AdminHome/AdminHome';
import AllUsers from '../components/pages/AdminDashboard/AllUsers';
import ManageItems from '../components/pages/AdminDashboard/ManageItems';
import Home from '../components/pages/HomePages/Home';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import OrderFood from '../components/pages/OUR-MENU/ORDERFOOD/OrderFood';
import OurMenus from '../components/pages/OUR-MENU/OurMenus';
import UserCarts from '../components/pages/UserDashboard/Carts/UserCarts';
import DashboardHome from '../components/pages/UserDashboard/Home/DashboardHome';
import Payment from '../components/pages/UserDashboard/Payment/Payment';
import AdminOnlyRoutes from './AdminRoutes';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'our-menu',
                element: <OurMenus />
            },
            {
                path: 'order-food/:category',
                element: <OrderFood />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoutes>
                <Dashboard />
            </PrivateRoutes>
        ),
        children: [
            {
                path: '/dashboard/user-home',
                element: <DashboardHome />
            },
            {
                path: 'carts',
                element: <UserCarts />
            },
            {
                path: 'all-users',
                element: <AllUsers />
            },
            {
                path: 'payment',
                element: <Payment />
            },

            {
                path: 'addItem',
                element: (
                    <AdminOnlyRoutes>
                        <AddItem />
                    </AdminOnlyRoutes>
                )
            },
            {
                path: 'manage-items',
                element: (
                    <AdminOnlyRoutes>
                        <ManageItems />
                    </AdminOnlyRoutes>
                )
            },
            {
                path: 'admin-home',
                element: (
                    <AdminOnlyRoutes>
                        <AdminHome />
                    </AdminOnlyRoutes>
                )
            }
        ]
    }
]);
