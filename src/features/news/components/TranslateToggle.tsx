import { Link, useMatch } from "react-router-dom";

const TranslateToggle = () => {
  const isJa = useMatch("/ja");
  const styleEn = !isJa ? "hover:bg-pink-400 text-gray-900 bg-white" : "";
  const styleJa = isJa ? "hover:bg-pink-400 text-gray-900 bg-white" : "";
  return (
    <div className="container mx-auto mt-10 flex place-items-center px-5 lg:max-w-4xl">
      <Link to="/">
        <div
          className={`${styleEn} border border-white px-4 py-2 text-xl font-bold`}
        >
          English
        </div>
      </Link>
      <Link to="/ja">
        <div
          className={`${styleJa} border border-white px-4 py-2 text-xl font-bold`}
        >
          日本語
        </div>
      </Link>
    </div>
  );
};

export default TranslateToggle;
