import { format } from "date-fns";
import { Article as ArticleType } from "../types";

interface Props {
  article: ArticleType;
}

const Article = ({ article }: Props) => {
  return (
    <article className="rounded bg-gray-800 p-3 transition-all duration-150">
      <h3 className="mb-3 text-lg font-bold text-white">{article.title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            By <em>{article.author}</em>
          </p>
        </div>
        {article.url && (
          <a
            href={article.url}
            className="border-b border-gray-700 text-lg text-gray-400 hover:border-pink-400 hover:text-pink-400"
          >
            Read More
          </a>
        )}
      </div>
      {/* Format date using the `format` method from `date-fns` */}
      <div className="mt-10 text-gray-400">
        {format(new Date(article.created_at), "dd MMM yyyy")}
      </div>
    </article>
  );
};
export default Article;
