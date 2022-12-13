import HTMLLabel from "../../../components/Elements/HTMLLabel";
import { News } from "../types";

interface Props {
  news: News;
}

const TopNews = ({ news }: Props) => {
  return (
    <article className="container my-10 mx-auto flex flex-col items-center justify-center lg:max-w-5xl">
      <h2 className="my-5 text-center text-4xl font-bold text-white lg:text-6xl">
        {news.title}
      </h2>
      {news.url && (
        <a
          href={news.url}
          className="border-b border-gray-700 text-lg text-gray-600 hover:border-pink-400 hover:text-pink-400"
        >
          Read Full Story
        </a>
      )}
      {news.story_text && (
        <HTMLLabel label={news.story_text} style="text-lg text-gray-400" />
      )}
    </article>
  );
};

export default TopNews;
