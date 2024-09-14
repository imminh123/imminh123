// pages/api/users.js
import { connectToDatabase } from '../../db/mongoose';
import {InstagramPost} from 'app/db/models/instagram';


export async function GET() {
  await connectToDatabase();

  try {
    const posts = await InstagramPost.find({});
    return new Response(JSON.stringify({ success: true, data: posts }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}

export async function POST(request) {
  await connectToDatabase();
  const data = await request.json();

  try {
    const post = await InstagramPost.create(data);
    return new Response(JSON.stringify({ success: true, data: post }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}


