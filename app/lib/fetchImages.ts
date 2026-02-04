// lib/fetchImageUrls.ts
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export async function fetchImageUrls(): Promise<Record<string, string[]>> {
  const Bucket = 'personal-portfolio-1904';
  const Prefix = 'moments/';
  const data = await s3.listObjectsV2({ Bucket, Prefix }).promise();

  const groupedMap: Record<string, { url: string; lastModified: Date }[]> = {};

  data.Contents?.forEach((item) => {
    const key = item.Key || '';
    const size = item.Size || 0;
    const lastModified = item.LastModified;

    // Skip empty files and MOV files
    if (size === 0 || key.endsWith('.MOV') || !lastModified) return;

    const parts = key.split('/');
    if (parts.length < 2) return;

    const album = parts[1];
    if (!groupedMap[album]) groupedMap[album] = [];

    groupedMap[album].push({
      url: `https://d1xyk52624qxh5.cloudfront.net/${key}`,
      lastModified,
    });
  });

  // Sort and transform to desired output
  const groupedSorted: Record<string, string[]> = {};
  for (const [album, files] of Object.entries(groupedMap)) {
    files.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
    groupedSorted[album] = files.map((f) => f.url);
  }

  return groupedSorted;
}

export async function fetchWeddingImages(): Promise<string[]> {
  const Bucket = 'wedding-media-invitation';
  const data = await s3.listObjectsV2({ Bucket }).promise();

  const images: { url: string; lastModified: Date }[] = [];

  data.Contents?.forEach((item) => {
    const key = item.Key || '';
    const size = item.Size || 0;
    const lastModified = item.LastModified;

    // Skip empty files, folders, and non-image files
    if (size === 0 || !lastModified) return;

    // Only include common image formats
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.heic'];
    const hasImageExtension = imageExtensions.some(ext =>
      key.toLowerCase().endsWith(ext)
    );

    if (!hasImageExtension) return;

    images.push({
      url: `https://d12g7i3vymjmyt.cloudfront.net/${key}`,
      lastModified,
    });
  });

  // Sort by last modified (newest first)
  images.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

  return images.map((img) => img.url);
}