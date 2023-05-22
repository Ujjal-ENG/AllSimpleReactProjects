/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';

const { Schema } = mongoose;
const refreshTokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

export const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);
