/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import { getShoppingCart } from '../utilities/fakedb';

export const cartProductsLoader = async () => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

        const { data } = await axios.post('https://ame-zon-server.vercel.app/productsByIds', { ids });

    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = data.products.find((pd) => pd._id === id);
        if (addedProduct) {
            const qunatity = storedCart[id];
            addedProduct.quantity = qunatity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
};
