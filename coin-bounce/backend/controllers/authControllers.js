/* eslint-disable newline-per-chained-call */
/* eslint-disable prefer-regex-literals */
import Joi from 'joi';

/* eslint-disable import/prefer-default-export */

// login controller
export const loginController = async (req, res, next) => {};

// register controller
export const registerController = async (req, res, next) => {
    try {
        // 1. validate the input field
        const schema = Joi.object({
            userName: Joi.string().alphanum().min(3).max(30).required(),
            name: Joi.string().min(3).max(30).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$').required()),
            confirmPassword: Joi.ref('password'),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
        });

        const { error } = schema.validate(req.body);

        // 2. if error occurs handling the error
        if (error) {
            return next(error);
        }

        // 3. check if email or userName is already registered or not
    } catch (error) {
        console.log(error);
    }
};
