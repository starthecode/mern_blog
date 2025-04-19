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

// Use memory storage for Multer (we’ll directly upload to Azure)
const upload = multer({ storage: multer.memoryStorage() });

// Azure Blob Config
const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const UPLOAD_CONTAINER = 'uploads'; // you already created this in Azure

// Create Azure container client
const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);
const containerClient = blobServiceClient.getContainerClient(UPLOAD_CONTAINER);

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const blobName = `${Date.now()}-${req.file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(req.file.buffer, {
      blobHTTPHeaders: { blobContentType: req.file.mimetype },
    });

    const blobUrl = blockBlobClient.url;

    res.status(200).json({ fileUrl: blobUrl }); // You can also include blobName if needed
  } catch (error) {
    console.error('Azure upload error:', error.message);
    res.status(500).json({ error: 'Failed to upload to Azure' });
  }
});

// Media Library: List all files from "uploads" container
router.get('/media', async (req, res) => {
  try {
    const blobs = [];

    for await (const blob of containerClient.listBlobsFlat()) {
      blobs.push({
        name: blob.name,
        url: containerClient.getBlobClient(blob.name).url,
      });
    }

    res.status(200).json(blobs);
  } catch (err) {
    console.error('Azure media list error:', err.message);
    res.status(500).json({ error: 'Failed to list blobs' });
  }
});

export default router;
