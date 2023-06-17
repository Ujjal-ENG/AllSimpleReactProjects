/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/layouts/DashboardLayout/DashboardLayout';
import AdminHome from '../components/pages/AdminDashboard/AdminHome/AdminHome';
import ManageBookings from '../components/pages/AdminDashboard/ManageBookings';
import ManageUsers from '../components/pages/AdminDashboard/ManageUsers';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import HotelAvaility from '../components/pages/SearchResultPages/HotelAvaility';
import SearchResult from '../components/pages/SearchResultPages/SearchResult';
import DashboardHome from '../components/pages/UserDashboard/Home/DashboardHome';
import SelectedBookings from '../components/pages/UserDashboard/SelectedBookings';
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
                path: '/search-results',
                element: <SearchResult />
            },
            {
                path: 'search-hotel/:id',
                element: <HotelAvaility />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
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
                path: 'dashboard/selected-bookings',
                element: <SelectedBookings />
            },

            {
                path: 'admin-home',
                element: (
                    <AdminOnlyRoutes>
                        <AdminHome />
                    </AdminOnlyRoutes>
                )
            },
            {
                path: 'dashboard/manage-users',
                element: (
                    <AdminOnlyRoutes>
                        <ManageUsers />
                    </AdminOnlyRoutes>
                )
            },

            {
                path: 'dashboard/manage-bookings',
                element: (
                    <AdminOnlyRoutes>
                        <ManageBookings />
                    </AdminOnlyRoutes>
                )
            }
        ]
    }
]);
