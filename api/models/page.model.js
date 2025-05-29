import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema(
  {
    postType: {
      type: String,
      default: 'page',
    },
    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      unique: true,
    },

    template: {
      type: String,
    },

    parentPage: {
      type: String,
    },

    editorJs: {
      type: mongoose.Schema.Types.Mixed,
    },

    footercta: {
      type: Boolean,
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

    metaFields: {
      featuredImage: {
        type: String,
        default: '',
      },
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

    customMetaFields: {
      customMetaTitle: { type: String, default: '' },
      customMetaDesc: { type: String, default: '' },
      customMetaLink: { type: String, default: '' },
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
