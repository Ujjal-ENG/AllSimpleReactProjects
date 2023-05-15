import React from 'react';

const MOdal = ({ data }) => {
    console.log(data.title, data.image);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">Update the Event!!</h3>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" defaultValue={data.title} placeholder="Update Title here" className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={data.image} placeholder="Update Img URL Here" className="input input-bordered w-full " />
                        <button className="btn my-4" type="submit">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MOdal;
