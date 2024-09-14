// models/InstagramPost.js
import mongoose from 'mongoose';

const InstagramPostSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  caption: { type: String, required: true },
  media_type: { type: String, enum: ['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'], required: true },
  media_url: { type: String, required: true },
  permalink: { type: String, required: true },
  children: {
    data: [{
      media_type: { type: String, enum: ['IMAGE', 'VIDEO'], required: true },
      media_url: { type: String, required: true },
    }],
  },
});

export const InstagramPost = mongoose.models.InstagramPost || mongoose.model('InstagramPost', InstagramPostSchema);

