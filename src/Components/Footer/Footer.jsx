import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <h6>
          <span>👨‍💻 | Vishal Singh Rawat </span>
        </h6>
        <div className="footer-links">
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
      </footer>
    </>
  );
};

export default Footer;
