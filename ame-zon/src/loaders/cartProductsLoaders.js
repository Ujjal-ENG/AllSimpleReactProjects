/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { getShoppingCart } from '../utilities/fakedb';

export const cartProductsLoader = async () => {
    const storedCart = getShoppingCart();
    const loadedProducts = await fetch('http://localhost:8080/all-products');
    const { products } = await loadedProducts.json();
    const ids = Object.keys(storedCart);
    console.log(ids);
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find((pd) => pd._id === id);
        if (addedProduct) {
            const qunatity = storedCart[id];
            addedProduct.quantity = qunatity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
};
