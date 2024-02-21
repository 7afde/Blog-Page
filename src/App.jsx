
import BlogPost from './BlogPost'; // Assuming BlogPost component is in a separate file

const App = () => {
  // Example blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "Description of Blog Post 1",
      image: "https://via.placeholder.com/300", // Example image URL
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "Description of Blog Post 2",
      image: "https://via.placeholder.com/300", // Example image URL
    },
    {
      id: 3,
      title: "Blog Post 3",
      description: "Description of Blog Post 3",
      image: "https://via.placeholder.com/300", // Example image URL
    },
    {
      id: 4,
      title: "Blog Post 1",
      description: "Description of Blog Post 1",
      image: "https://via.placeholder.com/300", // Example image URL
    },
    {
      id: 5,
      title: "Blog Post 2",
      description: "Description of Blog Post 2",
      image: "https://via.placeholder.com/300", // Example image URL
    },
    {
      id: 6,
      title: "Blog Post 3",
      description: "Description of Blog Post 3",
      image: "https://via.placeholder.com/300", // Example image URL
    },
  ];

  return (
    <div className="container mx-auto py-4 px-12">
      <div className="mt-10 flex flex-wrap justify-center flex-col md:flex-row">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-8 px-4">
            <BlogPost
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

export default App;

