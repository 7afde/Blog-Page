import { useParams } from "react-router-dom";
import { PostsContext } from "../Contexts/PostsContext";
import { useContext } from "react";

const BlogPostDetails = () => {
  const { id } = useParams();
  const posts = useContext(PostsContext);
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full z-10 rounded h-48 object-cover shadow-md"
      />
      <p>Title: {post.title}</p>
      <p>Description: {post.description}</p>
      {post.id === 2 && <p>Extra content for Blog Post 1</p>}
      {/* Additional details of the blog post */}
    </div>
  );
};

export default BlogPostDetails;
