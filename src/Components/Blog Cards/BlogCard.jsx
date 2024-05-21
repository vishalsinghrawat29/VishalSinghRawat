import React from "react";
import "./BlogCard.css";
import { MdArrowOutward } from "react-icons/md";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div
        className="blog-card"
        onClick={() => window.open(blog.url, "_blank")}
      >
        <div className="blog-heading">
          <h4>{blog.title}</h4>
          <span className="arrow-btn">
            <MdArrowOutward />
          </span>
        </div>

        <p>{blog.description}</p>
      </div>
    </>
  );
};

export default BlogCard;
