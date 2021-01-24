import Layout from "../components/Layout";
import Post from "../components/Post";
import Link from "next/link";
import { NextPage, NextPageContext } from "next";
import { POST, getAllPostsData } from "../lib/posts";

interface PROPS {
  posts: POST[];
}

const BlogPage: NextPage<PROPS> = ({ posts }) => {
  return (
    <Layout title="blog page">
      <ul className="mt-16">
        {posts && posts.map((post) => <Post key={post.id} post={post}></Post>)}
      </ul>
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12 mb-16">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
