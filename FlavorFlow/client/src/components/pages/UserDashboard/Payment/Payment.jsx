import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY);

const Payment = () => {
    const { state } = useLocation();

    return (
        <div className="md:-ml-60 -ml-0">
            <Helmet>
                <title>Flavor|Flow - Payment</title>
            </Helmet>
            <SharedTitle title="PAYMENT" message="Please proceed to Process!" />
            <Elements stripe={stripePromise}>
                <CheckOutForm price={state} />
            </Elements>
        </div>
    );
};

export default Payment;
