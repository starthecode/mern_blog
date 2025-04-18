// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();

// const __dirname = path.resolve();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = path.join(__dirname, '.', 'assets', 'uploads');
//     fs.mkdirSync(uploadPath, { recursive: true }); // ensure folder exists
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, uniqueSuffix + ext);
//   },
// });

// const upload = multer({ storage });

// router.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

//   const filePath = `/assets/uploads/${req.file.filename}`;
//   res.status(200).json({ filePath });
// });

// export default router;

import express from 'express';
import multer from 'multer';
import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Multer will store the file in memory instead of disk
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Azure Blob Config
const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const CONTAINER_NAME = 'uploads'; // make sure this exists in your Azure Storage

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);
const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const blobName = `${Date.now()}-${req.file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(req.file.buffer, {
      blobHTTPHeaders: { blobContentType: req.file.mimetype },
    });

    const blobUrl = blockBlobClient.url;

    console.log('blobUrl', blobUrl);

    res.status(200).json({ fileUrl: blobUrl });
  } catch (error) {
    console.error('Azure upload error:', error.message);
    res.status(500).json({ error: 'Failed to upload to Azure' });
  }
});

export default router;
