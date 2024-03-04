import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogPostCard = ({ id, image, title, description }) => {
  return (
    <div className="min-w-72 ax-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full z-10 rounded h-48 object-cover shadow-md"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-hidden whitespace-normal">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 mb-5">
        <Link
          to={`/blog/${id}`}
          className=" text-black font-bold underline hover:text-[#38C798] transition-all duration-200 ease-in-out"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogPostCard;
