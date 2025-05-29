import Customizer from '../models/customizer.model.js';
import { errorhandler } from '../utils/error.js';

export const updateCustomizer = async (req, res, next) => {
  if (!req.user?.isAdmin) {
    return next(errorhandler(403, 'You are not allowed to create the post'));
  }

  const { content } = req.body;
  const userId = req.user.id; // get userId from authenticated user

  try {
    const updatedCustomizer = await Customizer.findOneAndUpdate(
      { userId }, // match user
      { content }, // update
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    res.status(200).json({
      success: true,
      customizer: updatedCustomizer,
    });
  } catch (error) {
    next(error);
  }
};

export const getCustomizer = async (req, res, next) => {
  try {
    const customizers = await Customizer.find(); // rename local var

    res.status(200).json({ customizers });
  } catch (error) {
    next(error);
  }
};
