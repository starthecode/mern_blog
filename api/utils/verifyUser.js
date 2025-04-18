import jwt from 'jsonwebtoken';

import { errorhandler } from './error.js';

export const verifyToken = (req, res, next) => {
  console.log('req', req.cookies);

  const token = req.cookies.access_token;

  console.log('token', token);

  if (!token) {
    console.log('debug');

    return next(errorhandler(401, 'Unauthorized'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('debug2');

      return next(errorhandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
