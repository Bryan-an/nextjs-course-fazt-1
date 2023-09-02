import PostCard from '@/components/post-card';

const loadPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
};

// RSC
const PostsPage = async () => {
  const posts = await loadPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
