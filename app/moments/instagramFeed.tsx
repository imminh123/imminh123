"use client";

import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { InstagramPost } from "../interface/instagram";

interface InstagramFeedProps {
  media?: InstagramPost[];
}


const InstagramFeed: React.FC<InstagramFeedProps> = ({ media }) => {
  const [open, setOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<number>(0);

  // Extract all the images url from the media
  const images = media?.flatMap((post) => (
    post.media_type === 'CAROUSEL_ALBUM' && post.children ? (
      post.children.data.map((child) => child.media_url)
    ) : post.media_url
  ));

  const lightbox_images: any = images?.map(image => ({src: image}))

  return (
    <div className="masonry-grid">
      {media?.flatMap((post, postIndex) => (
        post.media_type === 'CAROUSEL_ALBUM' && post.children ? (
          post.children.data.map((child, index) => (
            <div key={`${post.id}-${index}`} className="bento-item">
              <a onClick={() => {setOpen(true); setCurrentMedia(index)}} rel="noopener noreferrer">
                {child.media_type === 'IMAGE' ? (
                  <img src={child.media_url} alt={post.caption} />
                ) : child.media_type === 'VIDEO' ? (
                  <video controls>
                    <source src={child.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </a>
            </div>
          ))
        ) : (
          <div key={post.id} className="bento-item">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              {post.media_type === 'IMAGE' ? (
                <img src={post.media_url} alt={post.caption} />
              ) : post.media_type === 'VIDEO' ? (
                <video controls>
                  <source src={post.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </a>
          </div>
        )
      ))}

      <Lightbox
        open={open}
        index={currentMedia}
        close={() => setOpen(false)}
        slides={lightbox_images}
      />
    </div>
  );
};

export default InstagramFeed;