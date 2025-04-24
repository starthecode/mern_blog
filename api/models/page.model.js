import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      unique: true,
    },

    content: {
      type: [
        {
          type: {
            type: String, // "text" | "slider" etc
            required: true,
          },
          data: {
            type: mongoose.Schema.Types.Mixed, // allows different data types
            required: true,
          },
        },
      ],
      required: true,
    },

    featuredImage: {
      type: String,
      default: '',
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    pageId: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

pageSchema.virtual('seo', {
  ref: 'Seo',
  localField: '_id',
  foreignField: 'pageId',
  justOne: true,
  options: { match: { pageType: 'Page' } },
});

const Page = mongoose.model('Page', pageSchema);

export default Page;
