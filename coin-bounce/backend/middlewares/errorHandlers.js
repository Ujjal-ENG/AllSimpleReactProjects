/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import pkg from 'joi';

const { ValidationError } = pkg;

export const errorHandler = (error, req, res, next) => {
    // default error
    let status = 500;
    const data = {
        message: 'Internal Server Error!!',
    };

    if (error instanceof ValidationError) {
        status = error.status;
        data.message = error.message;
        return res.status(status).json(data);
    }

    if (error.status) {
        status = error.status;
    }

    if (error.message) {
        data.message = error.message;
    }

    return res.status(status).json(data);
};
