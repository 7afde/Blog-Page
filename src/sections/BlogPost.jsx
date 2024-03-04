import { useContext } from "react";
import { PostsContext } from "../Contexts/PostsContext";
import BlogPostCard from "../components/BlogPostCard";

const BlogPost = () => {
  const blogPosts = useContext(PostsContext);

  return (
    <div className="container mx-auto py-4 px-10">
      <h1 className="m-5 text-4xl font-bold">Actualite</h1>
      <div className="mt-6 flex flex-wrap justify-center items-center flex-col md:flex-row">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-8 px-4"
          >
            <BlogPostCard
              id={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
