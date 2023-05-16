/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ModalEdit = ({ data }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box  max-w-4xl w-full">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <input type="text" name="" id="" defaultValue={data?.title} className="input input-bordered" />
                    <input type="text" name="" id="" defaultValue={data?.image} className="input input-bordered" />
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">
                            Updated
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;
