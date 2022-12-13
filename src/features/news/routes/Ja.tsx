import { useState, FormEvent } from "react";
import TranslateToggle from "../components/TranslateToggle";
import Search from "../components/Search";
import TopNews from "../components/TopNews";
import Article from "../components/Article";
import { useNewsJa } from "../api/getNewsJa";

export default function Ja() {
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const url = `https://script.google.com/macros/s/AKfycbxCcQQA-LSW8gkC1mAQsutzC5r0VwXBypfXiTssV91t-a3q0gn_KFkrTtWXByyj6Z8kbg/exec?query=${query}`;
  const { articles, topNews, isLoading } = useNewsJa(url);

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
        </div>
      </main>
    </div>
  );
}
