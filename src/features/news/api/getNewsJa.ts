import { useState, useEffect } from "react";
import { Article, News } from "../types";

const defaultNews = {
  author: null,
  comment_text: null,
  created_at: "",
  objectID: "",
  story_text: null,
  title: null,
  url: null,
};

export const useNewsJa = (
  url: string
): {
  articles: Article[];
  topNews: News;
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [topNews, setTopNews] = useState<News>(defaultNews);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTopNews(data[0]);
        // 1つめのニュースを取り除く
        data.shift();
        setArticles(data);
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
    topNews: topNews,
    isLoading: isLoading,
  };
};
