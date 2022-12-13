import { FormEvent, useState } from "react";
import LoadingSearch from "./LoadingSearch";

interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoadingSearch: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ handleSubmit, isLoadingSearch, text, setText }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto mt-16 flex place-items-center px-5 lg:max-w-4xl"
    >
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Search for something..."
        autoComplete="off"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mr-5 w-full rounded border border-gray-700 bg-transparent py-2 px-4 text-xl text-gray-200 placeholder-gray-400 outline-none transition-all duration-150 focus:border-gray-600 lg:text-4xl"
      />
      <button
        type="submit"
        className="flex items-center rounded border border-gray-700 bg-white py-2 px-6 text-xl text-gray-700 transition-all duration-150 hover:bg-pink-400 hover:text-white lg:text-4xl"
      >
        SEARCH
        {isLoadingSearch && <LoadingSearch />}
      </button>
    </form>
  );
};
export default Search;
