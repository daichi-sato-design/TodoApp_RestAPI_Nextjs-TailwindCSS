import { NextComponentType, NextPageContext } from "next";
import { TASK } from "../lib/tasks";

interface PROPS {
  task: TASK;
}

const Post: NextComponentType<NextPageContext, {}, PROPS> = ({ task }) => {
  return (
    <div className="py-1">
      <span>{task.id}</span>
      {":"}
      <span className="cursor-pointer text-blue-500 border-blue-500 hover:bg-gray-200">
        {task.title}
      </span>
    </div>
  );
};
export default Post;
