import BlogPost from "./BlogPost"; // Assuming BlogPost component is in a separate file
import Testemonial from "./Testemonial";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpeg";
import blog5 from "./assets/blog5.jpg";
import blog6 from "./assets/blog6.jpg";

const App = () => {
  // Example blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: `${blog1}`, // Example image URL
    },
    {
      id: 2,
      title: "Blog Post 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: `${blog2}`, // Example image URL
    },
    {
      id: 3,
      title: "Blog Post 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: `${blog3}`, // Example image URL
    },
    {
      id: 4,
      title: "Blog Post 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: `${blog4}`, // Example image URL
    },
    {
      id: 5,
      title: "Blog Post 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: `${blog5}`, // Example image URL
    },
    {
      id: 6,
      title: "Blog Post 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      image: `${blog6}`, // Example image URL
    },
  ];

  return (
    <div className="bg-[#f8f8f8]">
      <div className="container mx-auto py-4 px-10">
        <h1 className="m-5 text-4xl font-bold">Actualite</h1>
        <div className="mt-6 flex flex-wrap justify-center items-center flex-col md:flex-row">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-8 px-4"
            >
              <BlogPost
                title={post.title}
                description={post.description}
                image={post.image}
              />
            </div>
          ))}
        </div>
      </div>
      <Testemonial />
    </div>
  );
};

export default App;
