import { format } from "date-fns";
import HTMLLabel from "../../../components/Elements/HTMLLabel";
import { Story as StoryType } from "../types";

interface Props {
  story: StoryType;
}

const Story = ({ story }: Props) => {
  return (
    <article className="rounded bg-gray-800 p-3 transition-all duration-150">
      <h3 className="mb-3 text-lg font-bold text-white">{story.title}</h3>
      {story.story_text && (
        <HTMLLabel label={story.story_text} style="text-lg text-gray-200" />
      )}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          By <em>{story.author}</em>
        </p>
      </div>
      <div className="mt-10 text-gray-400">
        {format(new Date(story.created_at), "dd MMM yyyy")}
      </div>
    </article>
  );
};
export default Story;
