import vishalsinghrawat from "./../assets/VishalSinghRawat.png";
import "./Style/About.css";
const About = () => {
  return (
    <>
      <div className="page">
        <div className="about-image">
          <img src={vishalsinghrawat} alt="vishalsinghrawat-img" />
        </div>
        <div className="about-intro">
          <h1 className="name">Vishal Singh Rawat</h1>
          <h5 className="designation">
            Software Engineer &#10094; Full Stack Developer / &#10095;
          </h5>
        </div>
        <div className="about-body">
          <p>
            I'm a Full Stack Software Engineer with a unique combination of
            graphic design and software development skills. This unique
            combination allows me to deliver exceptional results in crafting
            user-friendly websites and applications.
          </p>
          <p>
            In college at Government Engineering College, I started learning web
            development through external courses. As I went deeper, I saw how
            important visual appeal is for websites in a crowded online space.
            Good visuals don't just make a website look nice; they improve user
            experience and help reach the right audience.
          </p>
          <p>
            During college, I began freelancing as a graphic designer and web
            developer. This work sharpened my versatility and problem-solving
            skills. I believe in combining technical know-how with creative
            design to achieve great results in every project.
          </p>
          <p>
            To boost my technical skills, I joined NeogCamp, a full-stack
            development bootcamp, in my final year. There, I built projects and
            practiced extensively, gaining a deep understanding of technology.
          </p>
          <p>
            After graduation, I joined Simplotel as a Software Engineer, where I
            led the development of websites for many hotels and resorts,
            enhancing their digital presence and client satisfaction.
          </p>
          <p>
            Now, I work at Sony India Software Center as a Software Engineer
            focusing on developing applications for Sony Group companies
            globally.
          </p>
        </div>
        <div className="about-experience">
          <h4>Experience</h4>
          <div className="experience-card">
            <p>
              <a href="https://www.sonyindiasoftware.co.in/">
                Sony India Software Center
              </a>
            </p>
            <p>Software Engineer Consultant | May 2024 - Present</p>
            <span>
              Developing applications for Sony Group companies worldwide,
              ensuring seamless integration and optimal performance
            </span>
          </div>
          <div className="experience-card">
            <p>
              <a href="https://www.simplotel.com/">Simplotel</a>
            </p>
            <p>Software Engineer | Sep 2023 - May 2024</p>
            <span>
              Developed the websites for numerous hotels and resorts, leading 5+
              projects to enhance their digital presence and client
              satisfaction.
            </span>
          </div>
        </div>
        <div className="about-education">
          <h4>Education</h4>
          <div className="education-card">
            <p>Bachelor of Technology in Computer Science Engineering</p>
            <span>
              Government Engineering College, Ajmer, Rajasthan | 2019 - 2023
            </span>
            <span>CGPA: 8.77</span>
          </div>
          <div className="education-card">
            <p>Class XII (Senior Secondary Examination) CBSE (PCM)</p>
            <span>
              Maharaja Agrasen Public School, Ajmer, Rajasthan | 2018 - 2019
            </span>
            <span>Percentage: 91.20%</span>
          </div>
        </div>
        <div className="about-skills">
          <h4>Technical Skills</h4>
          <div className="skills-container">
            <p>
              <span>- Programming Languages:</span> JavaScript, Java, C
            </p>
            <p>
              <span>- Development:</span> HTML, CSS, Bootstrap, Node.js, React
              JS, TypeScript, Redux, Express.js, MongoDB, MySQL, jQuery, JEST
              (Testing)
            </p>
            <p>
              <span>- Tools:</span> GitHub, Visual Studio Code (VS Code),
              CodeSandbox, Repl.it, Postman, Figma, Razorpay
            </p>
          </div>
        </div>
        <div className="about-end">
          <p>
            I'm open to collaborating with innovative companies or individuals
            on projects that push technology's boundaries and let me use my
            development and design skills. Whether for a full-time role or
            freelance work, I'm ready for impactful projects that challenge me
            and allow me to make a meaningful contribution. Feel free to reach
            out to me at{" "}
            <a href="mailto:rawatvishal73@gmail.com" target="_blank">
              rawatvishal73@gmail.com
            </a>{" "}
            📧
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
