import { fetchImageUrls } from '../lib/fetchImages';
import AlbumGallery from '../components/Album'; 

type Props = {
  albums: Record<string, string[]>;
};


const Moments = async () => {
  const albums = await fetchImageUrls();
  console.log(albums);
  return (
    <div className="max-w-full ">
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">Moments</h1>
      <p className="prose prose-neutral dark:prose-invert">
        ⚠️ Disclaimer: No photography, just memories here!
      </p>
      <p className="prose prose-neutral dark:prose-invert mt-3 mb-6">
        I’ve been lucky enough to gather these priceless moments from around the
        globe with friends from every corner. If any of these memories resonate
        with you, let me know! 😉
      </p>

    {/* Album Gallery */}
    <AlbumGallery albums={albums} />
    </div>
  );
};

export default Moments;
