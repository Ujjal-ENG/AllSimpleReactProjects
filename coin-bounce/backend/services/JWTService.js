import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const secretKEY = process.env.SECRET_KEY;
class JWTServices {
    // sign access token
    signAccessToken(payload, expiryTime, secret = secretKEY) {
        return jwt.sign(payload, secret, { expiresIn: expiryTime });
    }

    // sign refresh token
    signRefreshToken(payload, expiryTime, secret) {
        return jwt.sign(payload, secret, { expiresIn: expiryTime });
    }

    // verify access token
    // verify refresh token
    // store refresh token
}
