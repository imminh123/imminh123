
export interface InstagramPost {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    children?: {
      data: InstagramPost[];
    }
  }