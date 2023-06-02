/* eslint-disable semi-spacing */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventdefault();
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
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;
