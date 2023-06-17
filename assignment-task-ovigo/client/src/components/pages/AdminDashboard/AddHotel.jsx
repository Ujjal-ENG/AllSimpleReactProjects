/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddHotel = () => {
    const { register, handleSubmit, reset } = useForm();
    const [hotels, setHotels] = useState([]);

    const onSubmit = (data) => {
        const { placeId, placeName, description, imageURL, hotels } = data;

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
                distanceFromForest: hotel.distanceFromForest,
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
        console.log(newHotel);
        // Add the new hotel to the existing hotels list
        setHotels([...hotels, newHotel]);

        // Reset the form fields
        reset();
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
                    <input type="number" id="placeId" {...register('placeId')} required className="input input-bordered input-primary" />
                </div>

                {/* Place Name */}
                <div>
                    <label htmlFor="placeName" className="block font-medium mb-1">
                        Place Name
                    </label>
                    <input type="text" id="placeName" {...register('placeName')} required className="input  input-bordered input-primary" />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block font-medium mb-1">
                        Description
                    </label>
                    <textarea id="description" {...register('description')} required className="input  input-bordered input-primary w-full" />
                </div>

                {/* Image URL */}
                <div>
                    <label htmlFor="imageURL" className="block font-medium mb-1">
                        Image URL
                    </label>
                    <input type="text" id="imageURL" {...register('imageURL')} required className="input  input-bordered input-primary w-full" />
                </div>

                {/* Hotel */}
                <div>
                    <label className="block font-medium mt-4">Hotel</label>
                    <div className="border border-gray-300 p-4 rounded-md">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Hotel ID */}
                            <div>
                                <label htmlFor="hotelId" className="block font-medium">
                                    Hotel ID
                                </label>
                                <input type="number" id="hotelId" {...register('hotelId')} required className="input  input-bordered input-primary" />
                            </div>
                            {/* Hotel Name */}
                            <div>
                                <label htmlFor="hotelName" className="block font-medium">
                                    Hotel Name
                                </label>
                                <input type="text" id="hotelName" {...register('hotelName')} required className="input  input-bordered input-primary" />
                            </div>
                            {/* Rating */}
                            <div>
                                <label htmlFor="rating" className="block font-medium">
                                    Rating
                                </label>
                                <input type="number" id="rating" {...register('rating')} required step="0.1" className="input  input-bordered input-primary" />
                            </div>
                            {/* Distance from Forest */}
                            <div>
                                <label htmlFor="distanceFromForest" className="block font-medium">
                                    Distance from Forest
                                </label>
                                <input type="text" id="distanceFromForest" {...register('distanceFromForest')} required className="input  input-bordered input-primary" />
                            </div>
                            {/* Amenities */}
                            <div>
                                <label htmlFor="amenities" className="block font-medium">
                                    Amenities (comma-separated)
                                </label>
                                <input type="text" id="amenities" {...register('amenities')} required className="input  input-bordered input-primary" />
                            </div>
                            {/* Price */}
                            <div>
                                <label htmlFor="price" className="block font-medium">
                                    Price
                                </label>
                                <input type="number" id="price" {...register('price')} required className="input  input-bordered input-primary" />
                            </div>
                            {/* Includes Tax and Fees */}
                            <div>
                                <label htmlFor="includesTaxAndFees" className="block font-medium">
                                    Includes Tax and Fees
                                </label>
                                <input type="checkbox" id="includesTaxAndFees" {...register('includesTaxAndFees')} className="checkbox" />
                            </div>
                            {/* Description */}
                            <div className="col-span-2">
                                <label htmlFor="hotelDescription" className="block font-medium">
                                    Hotel Description
                                </label>
                                <textarea id="hotelDescription" {...register('description')} required className="input  input-bordered input-primary w-full" />
                            </div>
                            {/* Image URL */}
                            <div className="col-span-2">
                                <label htmlFor="hotelImageURL" className="block font-medium">
                                    Hotel Image URL
                                </label>
                                <input type="text" id="hotelImageURL" {...register('imageURL')} required className="input  input-bordered input-primary w-full" />
                            </div>
                            {/* Rooms */}
                            <div className="col-span-2">
                                <label className="block font-medium mt-4">Rooms</label>
                                <div className="border border-gray-300 p-4 rounded-md">
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Room ID */}
                                        <div>
                                            <label htmlFor="roomId" className="block font-medium">
                                                Room ID
                                            </label>
                                            <input type="number" id="roomId" {...register('rooms[0].roomId')} required className="input  input-bordered input-primary" />
                                        </div>
                                        {/* Room Type */}
                                        <div>
                                            <label htmlFor="roomType" className="block font-medium">
                                                Room Type
                                            </label>
                                            <input type="text" id="roomType" {...register('rooms[0].roomType')} required className="input  input-bordered input-primary" />
                                        </div>
                                        {/* Room Description */}
                                        <div className="col-span-2">
                                            <label htmlFor="roomDescription" className="block font-medium">
                                                Room Description
                                            </label>
                                            <textarea id="roomDescription" {...register('rooms[0].description')} required className="input  input-bordered input-primary" />
                                        </div>
                                        {/* Room Occupancy */}
                                        <div>
                                            <label htmlFor="roomOccupancy" className="block font-medium">
                                                Room Occupancy
                                            </label>
                                            <input type="number" id="roomOccupancy" {...register('rooms[0].occupancy')} required className="input  input-bordered input-primary" />
                                        </div>
                                        {/* Room Price Per Night */}
                                        <div>
                                            <label htmlFor="roomPricePerNight" className="block font-medium">
                                                Room Price Per Night
                                            </label>
                                            <input type="number" id="roomPricePerNight" {...register('rooms[0].pricePerNight')} required className="input  input-bordered input-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Hotel Button */}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    Add Hotel
                </button>
            </form>
        </div>
    );
};

export default AddHotel;
