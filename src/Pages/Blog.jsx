import BlogCard from "../Components/Blog Cards/BlogCard";
import BlogsData from "./../Data/Blogs.json";

const Blog = () => {
  const blogArr = [...BlogsData.blogs].reverse();
  return (
    <>
      <div className="page">
        <div className=" work-section">
          <div className="work-intro">
            <h3>📝 Read My Blogs</h3>
            <p>
              I talk about things I'm learning in an easy-to-understand way.
              You'll see me sharing my experiences with different technologies
              and how I'm growing in my career. My goal is to share what I learn
              with you!
            </p>
          </div>
          <div className="work-container">
            {blogArr.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
