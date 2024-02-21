
import PropTypes from 'prop-types';

const BlogPost = ({ image, title, description }) => {
  return (
    <div className="-max-w-xs rounded overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Read more</a>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogPost;
