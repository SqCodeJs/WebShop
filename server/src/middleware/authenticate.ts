import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { User } from '../../../shared/types/commonTypes';

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (err: any, user: User) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, process.env.SESSIONS_SECRET as string, (verifyErr, decoded) => {
            if (verifyErr) {
                return res.status(401).json({ message: 'Token expired or invalid' });
            }

            req.user = user;
            return next();
        });
    })(req, res, next);
};
