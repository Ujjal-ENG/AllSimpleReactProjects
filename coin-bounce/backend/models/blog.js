/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'users',
        },
        content: {
            type: String,
            required: true,
        },
        photoPath: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const blogsModel = mongoose.model('Blog', blogSchema);
