import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpeg";
import blog5 from "./assets/blog5.jpg";
import blog6 from "./assets/blog6.jpg";
import BlogPost from "./sections/BlogPost";
import Testemonial from "./Testemonial";
import { PostsContext } from "./Contexts/PostsContext";
import BlogPostDetails from "./components/BlogPostDetails";

const App = () => {
  // Example blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Maîtriser l’Art de l’Organisation lors d’un Déménagement",
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
      <Router>
        <PostsContext.Provider value={blogPosts}>
          <Routes>
            <Route exact path="/" element={<BlogPost />}></Route>
            <Route path="/blog/:id" element={<BlogPostDetails />}></Route>
          </Routes>
        </PostsContext.Provider>
      </Router>
      <Testemonial />
    </div>
  );
};

export default App;
