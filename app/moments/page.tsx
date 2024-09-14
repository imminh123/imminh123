import InstagramFeed from './instagramFeed';
import axios from 'axios';
import './instagramFeed.css';
import { InstagramPost } from '../interface/instagram';

async function fetchMoments() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const response = await axios.get<{ data: InstagramPost[] }>(
    `${BASE_URL}/api/instagram`
  );

  return response.data.data;
}

const Moments = async () => {
  // const moments = await fetchMoments();
  return (
    <div className="max-w-full ">
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">Moments</h1>
      <p className='prose prose-neutral dark:prose-invert'>⚠️  Disclaimer: No photography, just memories here!</p>
      <p className='prose prose-neutral dark:prose-invert mt-3 mb-6'>I’ve been lucky enough to gather these priceless moments from around the globe with friends from every corner. If any of these memories resonate with you, let me know! 😉</p>
      {/* <InstagramFeed media={moments} /> */}
    </div>
  );
};

export default Moments;
