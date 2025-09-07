import Image from 'next/image';

type ImageItem = {
  url: string;
  alt: string;
};

type Props = {
  images: ImageItem[];
};

export default function ImageList({ images }: Props) {
  const getRandomHeight = (index: number) => {
    const heights = ['h-48', 'h-64', 'h-80', 'h-96'];
    return heights[index % heights.length];
  };

  return (
    <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative ${getRandomHeight(index)} w-full break-inside-avoid`}
        >
          <Image
            alt={image.alt}
            src={image.url}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
}