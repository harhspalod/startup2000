import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

import Wrapper from "./wrapper/Landing";

import miles from "../../assets/images/miles.jpg";
import wolverine from "../../assets/images/wolverine0.jpg";
import ironfist from "../../assets/images/ironfist.jpg";
import scarlet from "../../assets/images/scarlet.jpg";
import hulk from "../../assets/images/hulk.jpg";
import deadpool from "../../assets/images/deadpool.png";
import venom from "../../assets/images/venom.jpg";
import thor from "../../assets/images/thor.jpg";

import cocacola from "../../assets/images/cocacola.webp";
import ikea from "../../assets/images/ikea.webp";
import samsung from "../../assets/images/samsung.webp";
import fourf from "../../assets/images/4f.webp";

import barcode from "../../assets/images/barcode.webp";

import handvideo from "../../assets/videos/hand_neon.mp4";

import { SiInstagram, SiBehance } from "react-icons/si";
import { FaLinkedinIn, FaHeart, FaGrinTongueWink } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [spinebg, setspinebg] = useState(false);

  return (
    <Wrapper>
      <section className="one">
        <nav className="z-indextop">
          <ul className="d-flex navbar-link">
            <li>Get Started</li>
            <li className="logo">
              <span className="circle-border">S</span> <span>startopia</span>
            </li>
            <li>About</li>
          </ul>
        </nav>
        <Spline
          onClick={() => {
            setspinebg(false);
          }}
          className={spinebg ? "spline-bg z-index2" : "spline-bg"}
          scene="https://prod.spline.design/rR7vrWYVnjirvbj9/scene.splinecode"
        />

        {/* <video className="video-bg" autoPlay muted>
          <source type="video/mp4" src={Video} />
        </video> */}
        {/* <video className="video-bg-1" autoPlay loop muted={false}>
          <source type="video/mp4" src={Video} />
        </video> */}
        {/* <div className="linear-background"></div> */}
        <div className="XL-text">Start-Opia</div>
        <div className="L-text">Start-Opia</div>

        <div className="container-center">
          <div className="M-text">Innovate</div>

          <div className="social-icons">
            <span>
              <SiInstagram className="fab" />
            </span>
            <span>
              <FaLinkedinIn className="fab" />
            </span>
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
        </div>

        <div className="text-M">
          <span>
            <FaHeart /> /
            <FaGrinTongueWink /> &nbsp;
          </span>
          = Innovation
        </div>
        <Link to="/login" className="GetStarted">
          Get Started
        </Link>

        <div className="featured">FEATURED</div>
      </section>

      <section className="two">
        <img src={miles} alt="" />
        <img src={ironfist} alt="" />
        <img src={scarlet} alt="" />
        <img src={wolverine} alt="" />
        <img src={hulk} alt="" />
        <img src={deadpool} alt="" />
        <img src={venom} alt="" />
        <img src={thor} alt="" />
      </section>

      <section className="three">
        <span>login</span>
        <svg viewBox="0 0 150 150">
          <path
            id="curve"
            fill="transparent"
            d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
          />
          <text>
            <textPath xlinkHref="#curve" fill="#9b51e0">
              | VIEW | LIKE | POST |
            </textPath>
          </text>
        </svg>
      </section>

      <section className="five">
        <div className="five-content">
          <span className="circle-b">N</span>
          <div className="Why"></div>
        </div>
        <p className="five-p">
        Have a brilliant idea but need a team to make it real? Or are you 
        looking to join a project that inspires you? Startopia.in is here 
        to connect you! 
        Startopia.in is a simple and friendly platform where idea creators 
        and team seekers can meet. Whether you have an idea for a startup, 
        a project, or a competition, or you want to join an exciting project, 
        this is the place for you.
        </p>
        <p className="five-p">
        Why Startopia.in?
        Connect Easily: Meet like-minded people who are as passionate as you.
        Grow Together: Turn ideas into reality while building valuable experience.
        Open to Everyone: Whether you’re a beginner or an expert, there’s a place for you here.
        At Startopia.in, we make it easy for ideas to grow and for people to find meaningful projects. 
        It’s not just a website—it’s a space to dream, connect, and create.
        </p>

        <p className="five-p">Check out our services.</p>

        {/* <img src={jurrasic} className="bigimg-left" alt="" /> */}
        {/* <Spline
          className="bigimg-left"
          scene="https://prod.spline.design/OPjUA4wRIp6W0MSc/scene.splinecode"
        /> */}
        {/* <img src={avatar} className="bigimg-right" alt="" /> */}
        {/* <Spline
          className="bigimg-right"
          scene="https://prod.spline.design/ynT-4AQcXlkJMFhe/scene.splinecode"
        /> */}
      </section>

      <section className="six">
        <img src={barcode} alt="" className="barcode" />
        <div className="about"></div>

        <div className="grid-3">
          <div className="bnumber">1</div>
          <div className="bnumber">1+</div>
          <div className="bnumber">10+</div>
          <div className="mtext">
            Years of <br /> Excellence
          </div>
          <div className="mtext">
            Daily <br /> Newusers
          </div>
          <div className="mtext">
            Weekly <br /> Posts
          </div>
        </div>

        <p className="six-p">
        For Idea Creators:
        Post Your Idea: Share your startup, project, or hackathon idea with 
        the community to attract like-minded individuals.
        Build Your Team: Find skilled collaborators who align with your vision and can contribute effectively.
        Showcase Your Concept: Highlight your idea with detailed descriptions, visuals, and 
        goals to engage potential team members.
        Priority Features: (Coming Soon) Make your ideas more visible to the right audience with premium features.

    
        For Collaborators (Team Seekers):
        Explore Ideas: Browse through innovative projects and startups looking for contributors.
        Join Projects: Apply to ideas that match your skills, interests, and goals.
        Skill Growth Opportunities: Work on exciting projects to gain hands-on experience and build your portfolio.
        Networking: Connect with visionaries and expand your professional network.


      

        </p>
        <p className="six-p">
        Community Features:
        Idea Feedback: Share and receive constructive feedback from the community to refine your ideas.
        Mentoring Sessions: Access free mentoring from industry experts to guide your projects and skills.
        Discussion Forums: Engage in meaningful discussions about startups, innovation, and project challenges.

        Future Additions:
        AI Recommendations: Get AI-powered suggestions for ideas or collaborators based on your profile and interests.
        Funding Connections: Connect with potential investors interested in your ideas.
        Premium Features: Advanced tools to promote ideas and gain more visibility.
        </p>
      </section>

      <hr></hr>
      <section className="footer">
        <div className="footer-content">
          <ul className="d-flex navbar-link">
            <li className="logo">
              <span className="circle-border">S</span>{" "}
              <span>STARTOPIA</span>
            </li>
            <li></li>
            <li>Get started</li>
          </ul>
          <div className="footer-icon">
            <span>
              <SiInstagram className="fab" />
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
          <ul className="footer-link">
            <li className="footer-title">located</li>
            <li className="footer-text">bengaluru,karnataka</li>
            <li className="footer-title">WhatsApp:</li>
            <li className="footer-text">9073677221</li>
            <li className="footer-title">Mail:</li>
            <li className="footer-text">startopia@gmail.com</li>
          </ul>
        </div>

        <div className="line-right"></div>

        <div className="copyright">
          Copyrights © 2024 startopia. All rights reserved.
        </div>
      </section>
    </Wrapper>
  );
};

export default LandingPage;
