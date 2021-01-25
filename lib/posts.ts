import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

export interface POST {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export const getAllPostsData = async () => {
  const res = await fetch(new URL(`${apiUrl}/posts`));
  const posts: POST[] = await res.json();
  return posts;
};

export const getAllPostIds = async () => {
  const res = await fetch(new URL(`${apiUrl}/posts`));
  const posts: POST[] = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getPostData = async (id) => {
  const res = await fetch(new URL(`${apiUrl}/posts/${id}/`));
  const post: POST = await res.json();
  return {
    post,
  };
};
