import PostsPage from '../page';
import { Suspense } from 'react';

const loadPost = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostPage = async ({ params }) => {
  const post = await loadPost({ id: params.id });

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>Other Posts</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsPage />
      </Suspense>
    </div>
  );
};

export default PostPage;
