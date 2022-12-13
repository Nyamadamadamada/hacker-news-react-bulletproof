import { useState, FormEvent } from "react";
import Search from "../components/Search";
import TranslateToggle from "../components/TranslateToggle";
import Article from "../components/Article";
import Story from "../components/Story";
import TopNews from "../components/TopNews";
import { useNews } from "../api/getNews";

export default function En() {
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
  const { articles, stories, topNews, isLoading } = useNews(url);

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    setQuery(text);
    setText("");
  };

  return (
    <div>
      <main className="w-full h-full m-auto">
        <div>
          <Search
            handleSubmit={handleSubmit}
            isLoadingSearch={isLoading}
            text={text}
            setText={setText}
          />
          <TranslateToggle />
          <div>
            <TopNews news={topNews} />

            <article className="container mx-auto lg:max-w-5xl">
              <div className="inline text-gray-600 mr-2">Category:</div>
              <div className="inline font-bold capitalize text-gray-400">
                {query}
              </div>
            </article>

            {articles && articles.length > 0 && (
              <section className="container mx-auto mt-10">
                <h3 className="text-center text-white text-3xl font-bold">
                  ARTICLE
                </h3>
                <div className="mx-auto grid grid-cols-1 gap-5 p-5 lg:grid-cols-2 lg:max-w-5xl">
                  {articles.map((item) => {
                    return <Article key={item.objectID} article={item} />;
                  })}
                </div>
              </section>
            )}

            {stories.length > 0 && (
              <section className="container mx-auto mt-20">
                <h3 className="text-center text-white text-3xl font-bold">
                  STORY
                </h3>
                <div className="mx-auto grid grid-cols-1 gap-5 p-5 lg:max-w-5xl">
                  {stories.map((item) => {
                    return <Story key={item.objectID} story={item} />;
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
