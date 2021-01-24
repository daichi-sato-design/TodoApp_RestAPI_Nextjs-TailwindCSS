import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { POST } from "../lib/posts";

interface PROPS {
  post: POST;
}

const Post: NextComponentType<NextPageContext, {}, PROPS> = ({ post }) => {
  return (
    <div className="py-1">
      <span>{post.id}</span>
      {":"}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};
export default Post;
