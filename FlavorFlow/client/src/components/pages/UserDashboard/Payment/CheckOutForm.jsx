/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi-spacing */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import './checkoutfrom.css';

const CheckOutForm = ({ price, length, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { userInfo } = useAuth();
    const [processingStates, setProcessingStates] = useState(false);
    const [transitionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price }).then((res) => setClientSecret(res.data.clientSecret));
    }, [price, axiosSecure]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

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
        setProcessingStates(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: userInfo?.displayName || 'unknown',
                    email: userInfo?.email || 'unknown@unknown.com'
                }
            }
        });

        if (confirmError) {
            console.log(confirmError);
        }
        setProcessingStates(false);
        if (paymentIntent.status === 'succeeded') {
            const transitionID = paymentIntent.id;
            setTransactionId(transitionID);
            // save payment information to the server
            const payment = {
                email: userInfo?.email,
                transitionID,
                price,
                date: new Date(),
                quantity: length,
                items: cart?.map((el) => el._id),
                status: 'service pending',
                itemNames: cart?.map((el) => el.name)
            };
            const { data } = await axiosSecure.post('/payments', payment);
            console.log(data);
            if (data.insertedId) {
                console.log('data is inserted');
            }
        }
    };
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
                <button type="submit" className="btn btn-primary  btn-wide btn-sm" disabled={!stripe || !clientSecret || processingStates}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-xl font-bold text-red-500 text-center mt-4">{cardError}</p>}
            {transitionId && <p className="text-xl font-bold text-green-500 text-center mt-4">Transaction Complete with transitionID: {transitionId}</p>}
        </div>
    );
};

export default CheckOutForm;
