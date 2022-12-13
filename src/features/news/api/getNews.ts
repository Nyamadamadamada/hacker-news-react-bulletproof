import { useState, useEffect } from "react";
import { Article, News, Story } from "../types";

const defaultNews = {
  author: null,
  comment_text: null,
  created_at: "",
  objectID: "",
  story_text: null,
  title: null,
  url: null,
};

export const useNews = (
  url: string
): {
  articles: Article[];
  stories: Story[];
  topNews: News;
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [topNews, setTopNews] = useState<News>(defaultNews);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTopNews(data.hits[0]);
        // 1つめのニュースを取り除く
        data.hits.shift();
        setArticles(data.hits.filter((item: News) => item.url));
        setStories(data.hits.filter((item: News) => item.story_text));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [url]);

  return {
    articles: articles,
    stories: stories,
    topNews: topNews,
    isLoading: isLoading,
  };
};
