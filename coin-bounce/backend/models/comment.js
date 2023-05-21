/* eslint-disable comma-dangle */
/* eslint-disable import/prefer-default-export */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        blog: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Blog',
        },
        author: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const commentsModel = mongoose.model('Comment', commentSchema);
