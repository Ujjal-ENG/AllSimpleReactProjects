/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';

const SliderCard = () => {
    return (
        <div className="col-md-3 col-12 d mb-4">
            <div className=" text-white w-75 py-2 px-2 rounded" style={{ backgroundColor: '#E7F0F8', cursor: 'grabbing' }}>
                <div className="d-flex justify-content-center">
                    <img
                        alt="testimonial"
                        className="mb-4 rounded-circle border-2 border-light bg-light"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                        style={{ height: '100px', width: '100px' }}
                    />
                </div>
                <div className="h-50 text-center">
                    <h4 className="text-dark font-bold title-font tracking-wider text-xl">HOLDEN CAULFIELD</h4>
                    <p className="text-dark">Senior Product Designer</p>
                    <span
                        className="d-inline-flex rounded mt-2 mb-2"
                        style={{
                            backgroundColor: 'blue',
                            height: '4px',
                            width: 60,
                            textAlign: 'center'
                        }}
                    />
                    <h5 className="text-xl font-bold text-dark">Subject of Expertise</h5>
                    <p className="text-dark">MERN Stack</p>
                    <p className="text-dark">Leadership</p>
                    <p className="text-dark">Motivation</p>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
