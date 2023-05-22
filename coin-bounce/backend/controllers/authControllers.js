/* eslint-disable import/extensions */
/* eslint-disable newline-per-chained-call */
/* eslint-disable prefer-regex-literals */
import bcrypt from 'bcrypt';
import Joi from 'joi';
import { usersModel } from '../models/user.js';

/* eslint-disable import/prefer-default-export */

// login controller
export const loginController = async (req, res, next) => {
    // 1. validate user input
    // 2. if validation error. return error
    // 3. match user name and password
    // 4. return response
    try {
        const userLoginSchema = Joi.object({
            userName: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });

        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const { userName, password } = req.body;

        // match userName
        const user = await usersModel.findOne({ userName });

        if (!user) {
            const errord = {
                status: 401,
                message: 'Invalid UserName!!',
            };
            return next(errord);
        }

        // match password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            const message = { status: 401, message: 'Invalid Password' };
            return next(message);
        }

        return res.status(200).json({ success: true, message: 'Login Successfully', user });
    } catch (error) {
        return next(error);
    }
};

// register controller
export const registerController = async (req, res, next) => {
    try {
        // 1. validate the input field
        const schema = Joi.object({
            userName: Joi.string().alphanum().min(3).max(30).required(),
            name: Joi.string().min(3).max(30).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
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
        const { email, password } = req.body;

        const isEmailExists = await usersModel.exists({ email });

        if (isEmailExists) {
            const errorPass = {
                status: 409,
                message: 'You are already Registered!!',
            };
            return next(errorPass);
        }

        // 4. password hash
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5. store in database to hashedPassword
        const userToRegister = usersModel({
            ...req.body,
            password: hashedPassword,
        });

        const user = await userToRegister.save();

        // 6.  response send
        return res.status(201).json({
            success: true,
            message: 'User Created',
            user,
        });
    } catch (error) {
        console.log(error);
        return next(error);
    }
};
