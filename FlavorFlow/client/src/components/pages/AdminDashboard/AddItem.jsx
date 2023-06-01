import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedTitle from '../../layouts/shared/SharedTitle';

const AddItem = () => {
    return (
        <div className="md:-ml-36 -ml-0 ">
            <Helmet>
                <title>Flavor|Flow - Add Item</title>
            </Helmet>
            <SharedTitle title="ADD AN ITEM" message={"What's New?"} />
        </div>
    );
};

export default AddItem;
