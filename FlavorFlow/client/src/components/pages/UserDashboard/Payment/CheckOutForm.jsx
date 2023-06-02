/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi-spacing */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { userInfo } = useAuth();

    useEffect(() => {
        axiosSecure
            .post('/create-payment-intent', price)
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price, axiosSecure]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: userInfo?.displayName || 'unknown',
                        email: userInfo?.email || 'unknown@unknown.com'
                    }
                }
            })
            .then((result) => {
                // Handle result.error or result.paymentIntent
            });
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
    };
    console.log(price);
    return (
        <div>
            <form className="max-w-lg mx-auto py-7 space-y-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4'
                                }
                            },
                            invalid: {
                                color: '#9e2146'
                            }
                        }
                    }}
                />
                <button type="submit" className="btn btn-primary  btn-wide btn-sm" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-xl font-bold text-red-500 text-center mt-4">{cardError}</p>}
        </div>
    );
};

export default CheckOutForm;
