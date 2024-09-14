import { connectToDatabase } from '../../../db/mongoose';
import axios from 'axios';
import { InstagramPost } from '../../../interface/instagram';
import { InstagramPost as InstagramPostModel}  from 'app/db/models/instagram';

export async function fetchMoments() {
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTA_ACCESS_TOKEN;

  const response = await axios.get<{ data: InstagramPost[] }>(
    `https://graph.instagram.com/me/media`,
    {
      params: {
        fields:
          'id,caption,media_type,media_url,permalink,thumbnail_url,children{media_url,media_type}',
        access_token: ACCESS_TOKEN,
      },
    }
  );

  return response.data.data;
}

export async function GET() {
    await connectToDatabase();
  
    try {
      // Delete all the posts
      await InstagramPostModel.deleteMany({});

      const posts = await fetchMoments();
      // Save the posts to the database
      await InstagramPostModel.insertMany(posts);
      return new Response(JSON.stringify({ success: true, data: posts }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
    }
  }  