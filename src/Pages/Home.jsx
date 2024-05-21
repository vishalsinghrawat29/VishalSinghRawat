import vishalsinghrawat from "./../assets/VishalSinghRawat.png";
import projects from "./../Data/Projects.json";
import blogs from "./../Data/Blogs.json";
import ProjectCard from "../Components/Project Cards/ProjectCard";
import BlogCard from "../Components/Blog Cards/BlogCard";
import { FaXTwitter, FaLinkedinIn, FaArrowRight } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";

import { useNavigate } from "react-router-dom";

import "./Style/Home.css";
import Gallery from "../Components/Gallery/Gallery";

const Home = () => {
  const homeProjects = projects.projects.slice(0, 2);
  const homeBlogs = blogs.blogs.slice(0, 2);
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="profile-wrapper">
          <div className="profile-img">
            <img src={vishalsinghrawat} alt="vishalsinghrawat-img" />
          </div>
          <div className="profile-details">
            <h1 className="name">Vishal Singh Rawat</h1>
            <h5 className="designation">
              Software Engineer &#10094; Full Stack Developer / &#10095;
            </h5>
            <p>
              👋 Hi, I'm Full Stack Software Engineer skilled in graphic design
              and web development, to create Digital Experiences. I love
              designing websites, creating web apps, and making awesome graphics
              to bring imagination to life.✨
            </p>
          </div>

          <div className="profile-links">
            <a href="https://twitter.com/vsrawat2906" target="_blank">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/vishalsinghrawat/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/vishalsinghrawat29" target="_blank">
              <FiGithub />
            </a>
            <a href="mailto:rawatvishal73@gmail.com" target="_blank">
              <GoMail />
            </a>
          </div>
        </div>
        <div className="work-section ">
          <div className="work-intro ">
            <h3>Projects</h3>
            <p>
              Check out what I've created! See how I've used my skills and
              creativity to solve actual problems. If you want to collaborate or
              share feedback, feel free to reach out. I'm always keen to connect
              with fellow developers and enthusiasts!
            </p>
          </div>
          <div className="work-container">
            {homeProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="page-btn">
            <a href="" onClick={() => navigate("/projects")}>
              <span>Preview all projects</span> <FaArrowRight />
            </a>
          </div>
        </div>
        <div className=" work-section">
          <div className="work-intro">
            <h3>Blogs</h3>
            <p>
              Take a look at my blog where I explain what I'm learning in a
              simple way. I share my experiences with different technologies and
              how I'm advancing in my career. My aim is to share my knowledge
              with you!
            </p>
          </div>
          <div className="work-container">
            {homeBlogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
          <div className="page-btn">
            <a href="" onClick={() => navigate("/blogs")}>
              <span>Read all blogs</span> <FaArrowRight />
            </a>
          </div>
        </div>
        <div className="gallery-container">
          <Gallery />
        </div>
      </div>
    </>
  );
};

export default Home;
