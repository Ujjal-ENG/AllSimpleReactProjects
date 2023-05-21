/* eslint-disable newline-per-chained-call */
/* eslint-disable prefer-regex-literals */
import Joi from 'joi';

/* eslint-disable import/prefer-default-export */
export const loginController = async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
};
