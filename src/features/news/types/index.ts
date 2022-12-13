export interface News {
  author: string | null;
  comment_text: string | null;
  created_at: string;
  objectID: string;
  story_text: string | null;
  title: string | null;
  url: string | null;
}

export interface Article extends News {
  url: string;
}

export interface Story extends News {
  story_text: string;
}
