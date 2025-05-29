import mongoose from 'mongoose';

const customizerSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

const Customizer = mongoose.model('Customizer', customizerSchema);

export default Customizer;
