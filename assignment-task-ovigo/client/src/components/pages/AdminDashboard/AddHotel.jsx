/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddHotel = () => {
    const { register, handleSubmit, reset } = useForm();
    const [hotel, setHotels] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        const { placeId, placeName, description, imageURL, hotels } = data;
        data.placeName = data.placeName.toLowerCase();
        // Create a new hotel object with the submitted data, including rooms
        const newHotel = {
            placeId: parseInt(placeId, 10),
            placeName,
            description,
            imageURL,
            hotels: hotels.map((hotel) => ({
                hotelId: hotel.hotelId,
                hotelName: hotel.hotelName,
                rating: parseFloat(hotel.rating),
                distance: hotel.distance,
                amenities: hotel.amenities.split(',').map((amenity) => amenity.trim()),
                price: parseInt(hotel.price, 10),
                includesTaxAndFees: hotel.includesTaxAndFees === 'true',
                description: hotel.description,
                imageURL: hotel.imageURL,
                rooms: hotel.rooms.map((room) => ({
                    roomId: room.roomId,
                    roomType: room.roomType,
                    description: room.description,
                    occupancy: parseInt(room.occupancy, 10),
                    pricePerNight: parseInt(room.pricePerNight, 10)
                }))
            }))
        };

        try {
            const res = await axiosSecure.post('/hotels', data);
            if (res.data.success) {
                Swal.fire({
                    icon: 'success',

                    text: 'Hotel Data is Successfully Inserted!'
                });
                setLoading(false);
                reset();
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

        setHotels([...hotels, newHotel]);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Add Hotel</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Place ID */}
                <div>
                    <label htmlFor="placeId" className="block font-medium mb-1">
                        Place ID
                    </label>
                    <input className="input input-bordered input-primary w-full" type="number" id="placeId" {...register('placeId')} required />
                </div>

                {/* Place Name */}
                <div>
                    <label htmlFor="placeName" className="block font-medium mb-1">
                        Place Name
                    </label>
                    <input className="input input-bordered input-primary w-full" type="text" id="placeName" {...register('placeName')} required />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block font-medium mb-1">
                        Description
                    </label>
                    <textarea id="description" {...register('description')} required className="w-full input input-bordered input-primary" />
                </div>

                {/* Image URL */}
                <div>
                    <label htmlFor="imageURL" className="block font-medium mb-1">
                        Image URL
                    </label>
                    <input className="input input-bordered input-primary w-full" type="text" id="imageURL" {...register('imageURL')} required />
                </div>

                {/* Hotels */}
                <div>
                    <label className="block font-medium mb-1">Hotels</label>
                    <div className="space-y-4">
                        <div className="border border-gray-300 p-4 rounded-md">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="hotelId" className="block font-medium">
                                        Hotel ID
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="number" id="hotelId" {...register('hotels[0].hotelId')} required />
                                </div>
                                <div>
                                    <label htmlFor="hotelName" className="block font-medium">
                                        Hotel Name
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="text" id="hotelName" {...register('hotels[0].hotelName')} required />
                                </div>
                                <div>
                                    <label htmlFor="rating" className="block font-medium">
                                        Rating
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="number" id="rating" {...register('hotels[0].rating')} required step="0.1" />
                                </div>
                                <div>
                                    <label htmlFor="distance" className="block font-medium">
                                        Distance from City,Bus Stand or Any Tourist Places
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="text" id="distance" {...register('hotels[0].distance')} required />
                                </div>
                                <div>
                                    <label htmlFor="amenities" className="block font-medium">
                                        Amenities (comma-separated)
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="text" id="amenities" {...register('hotels[0].amenities')} required />
                                </div>
                                <div>
                                    <label htmlFor="price" className="block font-medium">
                                        Price
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="number" id="price" {...register('hotels[0].price')} required />
                                </div>
                                <div>
                                    <label htmlFor="includesTaxAndFees" className="block font-medium">
                                        Includes Tax and Fees
                                    </label>
                                    <select id="includesTaxAndFees" {...register('hotels[0].includesTaxAndFees')} required>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="hotelDescription" className="block font-medium">
                                        Hotel Description
                                    </label>
                                    <textarea id="hotelDescription" {...register('hotels[0].description')} required className="w-full input input-bordered input-primary" />
                                </div>
                                <div>
                                    <label htmlFor="hotelImageURL" className="block font-medium">
                                        Hotel Image URL
                                    </label>
                                    <input className="input input-bordered input-primary w-full" type="text" id="hotelImageURL" {...register('hotels[0].imageURL')} required />
                                </div>
                            </div>

                            {/* Rooms */}
                            <div>
                                <label className="block font-medium mt-4">Rooms</label>
                                <div className="space-y-4">
                                    <div className="border border-gray-300 p-4 rounded-md">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="roomId" className="block font-medium">
                                                    Room ID
                                                </label>
                                                <input className="input input-bordered input-primary w-full" type="number" id="roomId" {...register('hotels[0].rooms[0].roomId')} required />
                                            </div>
                                            <div>
                                                <label htmlFor="roomType" className="block font-medium">
                                                    Room Type
                                                </label>
                                                <input className="input input-bordered input-primary w-full" type="text" id="roomType" {...register('hotels[0].rooms[0].roomType')} required />
                                            </div>
                                            <div>
                                                <label htmlFor="roomDescription" className="block font-medium">
                                                    Room Description
                                                </label>
                                                <textarea id="roomDescription" {...register('hotels[0].rooms[0].description')} className="input input-bordered input-primary w-full" required />
                                            </div>
                                            <div>
                                                <label htmlFor="occupancy" className="block font-medium">
                                                    Occupancy
                                                </label>
                                                <input className="input input-bordered input-primary w-full" type="number" id="occupancy" {...register('hotels[0].rooms[0].occupancy')} required />
                                            </div>
                                            <div>
                                                <label htmlFor="pricePerNight" className="block font-medium">
                                                    Price per Night
                                                </label>
                                                <input
                                                    className="input input-bordered input-primary w-full"
                                                    type="number"
                                                    id="pricePerNight"
                                                    {...register('hotels[0].rooms[0].pricePerNight')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Hotel Button */}
                {loading ? (
                    <button className="btn btn-square">
                        <span className="loading loading-spinner" />
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary tracking-wider text-3xl btn-block font-bold  mt-5">
                        Add Hotel!!
                    </button>
                )}
            </form>
        </div>
    );
};

export default AddHotel;
