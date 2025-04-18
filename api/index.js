import express from 'express';
import cookieParser from 'cookie-parser';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cors from 'cors';

import path from 'path';
import userRoutes from './routes/user.route.js';

import authRoutes from './routes/auth.route.js';

import uploadRoutes from './routes/upload.route.js';

import pageRoutes from './routes/pages/page.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Database is connected'))
  .catch((err) => {
    console.log('error:', err);
  });

const __dirname = path.resolve();

const app = express();

// Middleware
app.use(express.json()); // Add this if you're handling JSON requests

app.use(cookieParser());

// Allow CORS from your frontend
app.use(
  cors({
    origin: 'http://localhost:5173', // Vite dev server
    credentials: true,
  })
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Routes
app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/file', uploadRoutes);

app.use('/api/page', pageRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Serve static files
// app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/assets', express.static(path.join(__dirname, 'api', 'assets')));

console.log('Assets path:', path.join(__dirname, 'assets'));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
