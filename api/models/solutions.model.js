import mongoose from 'mongoose';

const contentItemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    data: {
      type: mongoose.Schema.Types.Mixed, // For Editor.js blocks
    },
    value: {
      type: mongoose.Schema.Types.Mixed, // For simple blocks (text/imagebox/conclusion)
    },
  },
  { _id: false }
);

const solutionsSchema = new mongoose.Schema(
  {
    postType: {
      type: String,
      default: 'solutions',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    excerpts: {
      type: String,
      required: false,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    parentPage: {
      type: String,
    },

    editorJs: {
      type: mongoose.Schema.Types.Mixed,
    },

    pageId: {
      type: Number, // 🛠️ changed: you are sending pageId as number like 1598
      required: true,
      unique: true,
    },

    content: [contentItemSchema], // 🛠️ use sub-schema for flexible items

    metaFields: {
      categories: {
        type: [String],
        default: [],
      },
      tags: {
        type: [String],
        default: [],
      },
      featuredImage: {
        type: String,
        default: '',
      },
    },

    seoFields: {
      focusKeyphrase: { type: String },
      seoTitle: { type: String },
      seoDescription: { type: String },
    },
  },
  { timestamps: true }
);

const Solutions = mongoose.model('Solutions', solutionsSchema);

export default Solutions;
