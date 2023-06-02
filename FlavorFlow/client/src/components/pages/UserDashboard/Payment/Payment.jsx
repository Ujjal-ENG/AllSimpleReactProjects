import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedTitle from '../../../layouts/shared/SharedTitle';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    return (
        <div className="md:-ml-60 -ml-0">
            <Helmet>
                <title>Flavor|Flow - Payment</title>
            </Helmet>
            <SharedTitle title="PAYMENT" message="Please proceed to Process!" />
            <CheckOutForm />
        </div>
    );
};

export default Payment;
