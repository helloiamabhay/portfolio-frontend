import "../styles/Header.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Projects.css";
import "../styles/Contact.css";
import "../styles/Skills.css";
import { server } from "../redux/store.js";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import profile from "../assets/profile-pic2.png";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";
// import blog from "../assets/blog.JPG";
// import happyweb from "../assets/happyweb.JPG";
// import atm from "../assets/atm.jpeg";
import TextField from "@mui/material/TextField";
import contact from "../assets/contactimg.png";
import { sendSMS } from "../redux/actions/adminAction";
import toast from "react-hot-toast";


const Header = ({ isAuthenticated = false }) => {
  const [contactname, setContactname] = useState("");
  const [contactemail, setContactemail] = useState("");
  const [contactmessage, setContactmessage] = useState("");
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const [isNavOpen, setIsNavOpen] = useState(false); // Initialize to false
  // const { isAuthenticated } = useSelector((state) => state.auth);

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${server}/allSkills`, {
        timeout: 5000,
      });
      setSkills(response.data.getSkills);
    } catch (err) {
      toast.error("Please check your connection and reload");
      console.log("Error fetching data", err);
    }
  };
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${server}/allProjects`, {
        timeout: 5000,
      });
      setProjects(response.data.getProjects);
    } catch (err) {
      toast.error("Please check your connection and reload");
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchSkills();
    fetchProjects();
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false); // Set to false when a link is clicked
  };

  const sendSmsHandler = () => {
    const isOnline = navigator.onLine;
    if (!isOnline) {
      toast.error("Please check internet connection.");
    } else {
      sendSMS(contactname, contactemail, contactmessage);
      setContactemail("");
      setContactname("");
      setContactmessage("");
    }
  };

  return (
    <div>
      <header>
        <h3>ABHAY</h3>
        <div>
          <nav className={` ${isNavOpen ? "responsive_nav" : "hidden"}`}>
            <a href="#home" onClick={closeNavbar}>
              Home
            </a>
            <a href="#about" onClick={closeNavbar}>
              About
            </a>
            <a href="#skill" onClick={closeNavbar}>
              Skills
            </a>
            <a href="#project" onClick={closeNavbar}>
              My Projects
            </a>
            <a href="#contact" onClick={closeNavbar}>
              Contact Me
            </a>
            {isAuthenticated ? (
              <Link to={"/admin"}>
                <button className="adminbtn" onClick={closeNavbar}>
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="adminbtn" onClick={closeNavbar}>
                  Admin Login
                </button>
              </Link>
            )}
            <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
              <IoCloseOutline />
            </button>
          </nav>
          <button className="nav-btn" onClick={toggleNavbar}>
            <IoIosMenu />
          </button>
        </div>
      </header>
      {/*------------------------HOME PASE---------------------------*/}
      <div className="homeBox" id="home">
        <span className="intro">
          <h3>Hii,</h3>
          <h1>I'm Abhay Vishwakarma</h1>
          {/* <h2>Web Developer,</h2> */}
          <h3>
            Web Developer , Innovative Web Solutions , User Friendly Application
            ,Skills & Technologies, Continuous Learning.
          </h3>

          <a href="https://drive.google.com/file/d/1sZ0fKZUY4ho5_LxmT4Rnlijp1fi-Zc0W/view?usp=sharing">
            <button className="resumebtn">Download CV</button>
          </a>
        </span>
        <img src={profile} alt="" className="profile" />
      </div>
      <h1 className="about">-: About Me :-</h1>
      <hr className="aboutHr" />
      {/*------------------------ABOUT PASE---------------------------*/}
      <div className="aboutPase" id="about">
        <h2>ABHAY VISHWAKARMA-</h2>
        <p>
          Hii, I'm abhay vishwakarma, a passionate web developer based in
          ayodhya. I'm exploring web development,technologys and bussuness since
          two years.I specialize in building web applications using the MERN
          stack. In both front-end and back-end development,
          <br /> I create seamless user experiences.i worked on many projects by
          these technologys Java Script,React.js, Node.js, Express.js and
          MongoDB that available on my git-hub account.
        </p>
        <div className="aboutDetails">
          <p>Name : Abhay Vishwakarma</p>
          <p>Date Of Birth : 09/12/2003</p>
          <p>Education : BCA </p>
          <p>Completation ot Degree : 2025</p>
          <p>Email : Vishwakarmaabhay283@gmail.com</p>
          <p>HomeTown : Ambedkar Nagar{"(UP,India)"}</p>
        </div>
        <div className="connect">
          <a
            href="http://wa.me/7388279261"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare color="25D366" size={"38px"} />
          </a>
          <a
            href="https://github.com/helloiamabhay?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={"38px"} color="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-vishwakarma-9aa93425a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="0A66C2" size={"38px"} />
          </a>
        </div>
      </div>

      {/*------------------------SKILL PASE---------------------------*/}
      <div id="skill">
        <h1 className="skillHead">-: My Skills :-</h1>
        <hr className="skillHr" />
        <br />
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.skillImgUrl} alt=" img error" />
              <h4>{skill.skillName}</h4>
              <p>{skill.skillPercentage} %</p>
            </div>
          ))}
          {/* //////////////////////////////////////////////////// */}
        </div>
      </div>
      {/*------------------------PROJECT PASE---------------------------*/}
      <div id="project">
        <h1 className="projectHead">-: My Projects :-</h1>
        <hr className="projectHr" />
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="box">
                <a href={project.sourseCodeOrVideoLink}>
                  <p className="knowmore">know more</p>
                  <img src={project.projectImgUrl} alt="img" />
                </a>
              </div>
              <div className="soursecode">
                <a
                  href={project.githubCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub color="black" size={"30px"} />
                </a>
                <h4>{project.projecttitle}</h4>
              </div>
              <p>{project.discription}</p>
            </div>
          ))}
          {/* ///////////////////////////////////////////////////////////////// */}
        </div>
      </div>
      {/*------------------------CONTACT PASE---------------------------*/}
      <div id="contact">
        <h1 className="contacthead">Get In Touch</h1>
        <div className="contactpase">
          <div className="contactimg">
            <img src={contact} alt="" />
            <p className="contactP">
              Feel Free to contact me, I will get back to you as soon as i can.
            </p>
            <div className="connect">
              <a
                href="http://wa.me/7388279261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare color="25D366" size={"38px"} />
              </a>
              <a
                href="https://github.com/helloiamabhay?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={"38px"} color="black" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhay-vishwakarma-9aa93425a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin color="0A66C2" size={"38px"} />
              </a>
            </div>
          </div>
          <div className="input" autoComplete="off">
            <TextField
              className="contactinput"
              onChange={(e) => setContactname(e.target.value)}
              value={contactname}
              type="text"
              id="standard-basic"
              label="Name"
              required={true}
              variant="standard"
            />
            <TextField
              className="contactinput"
              onChange={(e) => setContactemail(e.target.value)}
              value={contactemail}
              type="email"
              id="standard-basic"
              required={true}
              label="Email"
              variant="standard"
            />
            <legend>Your message</legend>
            <textarea
              className="message"
              onChange={(e) => setContactmessage(e.target.value)}
              value={contactmessage}
              name=""
              required={true}
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="smsbtn" onClick={sendSmsHandler} type="submit">
              Send <BsFillSendFill className="sendicon" />
            </button>
          </div>
        </div>
      </div>
      {/*------------------------FOOTER---------------------------*/}
    </div>
  );
};

export default Header;
