/* eslint-disable react/jsx-indent */
import { TbError404 } from 'react-icons/tb';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const handlePage = () => {
        navigate(-1);
    };

    return (
        <div id="error-page" className="h-screen w-full flex justify-center items-center space-y-6 flex-col bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="w-full max-w-xl px-6 py-12 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-8">
                    <TbError404 className="h-16 w-16 mr-4" />
                    <h1 className="text-4xl font-bold text-gray-900">Oops, something went wrong!</h1>
                </div>
                <p className="text-xl font-medium text-gray-700">{error.statusText || error.message}</p>
                <div className="mt-8">
                    <button type="button" className="px-6 py-2 bg-red-600 text-white font-bold rounded-md mr-4" onClick={handlePage}>
                        Go Back
                    </button>
                    <button type="button" className="px-6 py-2 bg-gray-400 text-white font-bold rounded-md" onClick={() => navigate('/')}>
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
