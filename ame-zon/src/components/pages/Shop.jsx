/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import CartDeatis from './CartDeatis';
import ProductCard from './ProductCard';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const { totalProducts } = useLoaderData();
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    const fetchData = async () => {
        const fetchUrl = await fetch(`https://ame-zon-server.vercel.app/all-products?page=${currentPage}&limit=${itemsPerPage}`);
        const data = await fetchUrl.json();
        setProducts(data.products);
    };

    const handleAddtoCart = (details) => {
        // const newCart = [...cart, details];
        let newCart = [];

        const exists = cart.find((pd) => pd._id === details._id);

        if (!exists) {
            details.quantity = 1;
            newCart = [...cart, details];
        } else {
            exists.quantity += 1;
            const remaining = cart.filter((pd) => pd._id !== details._id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(details._id);
    };

    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);

        const fetchData2 = async () => {
            try {
                const { data } = await axios.post('https://ame-zon-server.vercel.app/productsByIds', { ids });
                const savedCart = [];
                // step 1 : get id of the storedCart

                for (const id in storedCart) {
                    // get product from the products state by using id
                    const addedProducts = data.products.find((el) => el._id === id);

                    // get quantity from the addedProducts
                    if (addedProducts) {
                        const quantity = storedCart[id];
                        addedProducts.quantity = quantity;
                        savedCart.push(addedProducts);
                    }
                }
                setCart(savedCart);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData2();
    }, [products]);

    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerPage]);

    // page option selection
    const options = [5, 10, 15, 20];

    const handleOptionChange = (e) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(0);
    };
    return (
        <div className="grid grid-cols-5 w-full h-screen mt-12">
            <div className="col-span-4 grid-flow-col">
                <div className="grid grid-cols-3 justify-items-center gap-6 p-10">{products && products.map((el) => <ProductCard key={el._id} data={el} handleAddtoCart={handleAddtoCart} />)}</div>

                <div className="flex gap-9 w-full  items-center px-10 py-5">
                    {pageNumbers.map((el) => (
                        <button type="button" className={currentPage === el ? 'btn bg-red-500' : 'btn'} key={el} onClick={() => setCurrentPage(el)}>
                            {el + 1}
                        </button>
                    ))}

                    <select className="w-8 h-8 p-5" value={itemsPerPage} onChange={handleOptionChange}>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <CartDeatis data={cart} />
        </div>
    );
}

export default Shop;
