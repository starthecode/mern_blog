import Page from '../models/page.model.js';
import { errorhandler } from '../utils/error.js';

export const createPage = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorhandler(403, 'You are not allowed to create the post'));
  }

  if (!req.body.title || !req.body.content) {
    return next(errorhandler(400, 'Please provide all required fields'));
  }

  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');

  const newPage = new Page({
    ...req.body,
    slug,
    pageId: req.body.pageId,
    userId: req.user.id,
  });

  try {
    const savedPage = await newPage.save();
    res.status(201).json({
      success: true,
      page: savedPage,
    });
  } catch (error) {
    next(error);
  }
};

export const getPages = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;

    const limit = parseInt(req.query.limit) || 10;

    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const pages = await Page.find({
      ...(req.query.pageId && { _id: req.query.pageId }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPageCount = await Page.countDocuments();

    res.status(200).json({
      pages,
      totalPageCount,
    });
  } catch (error) {
    next(error);
  }
};

export const getPageById = async (req, res, next) => {
  try {
    const page = await Page.findOne({ pageId: req.params.pageId });

    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res.status(200).json(page);
  } catch (error) {
    next(error.message);
  }
};

export const getPageBySlug = async (req, res, next) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });

    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res.status(200).json(page);
  } catch (error) {
    next(error.message);
  }
};

export const deletePageById = async (req, res, next) => {
  try {
    const { pageId } = req.params;

    const result = await Page.findOneAndDelete({ pageId: Number(pageId) });

    if (!result) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res
      .status(200)
      .json({ success: true, message: 'Page deleted successfully' });
  } catch (err) {
    next(err.message);
  }
};

export const updatePageById = async (req, res, next) => {
  try {
    const slug = req.body.title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');

    const updatedPage = await Page.findOneAndUpdate(
      { pageId: Number(req.params.pageId) },
      { $set: { ...req.body, slug } },
      { new: true }
    );

    if (!updatedPage) {
      return res
        .status(404)
        .json({ success: false, message: 'Page not found' });
    }

    res.status(200).json({ success: true, message: 'Page Updated' });
  } catch (error) {
    next(error.message);
  }
};
