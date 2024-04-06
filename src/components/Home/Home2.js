import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> JavaScript, TypeScript, </b>
              </i>
              with some knowledge in PHP and a bit of Python. Additionally, I
              have
              <i>
                <b className="purple"> mastery over </b>
              </i>
              libraries such as
              <i>
                <b className="purple"> React.js and Next.js, </b>
              </i>
              as well as frameworks like Express for Node.js and Laravel for
              PHP.
              <br />
              <br />
              My daily job revolves around developing new
              <i>
                <b className="purple"> Web Technologies and Products, </b>
              </i>
              utilizing libraries such
              <i>
                <b className="purple"> React.js and Next.js, </b>
              </i>
              for flexible UI development, while also leveraging frameworks like
              <i>
                <b className="purple">
                  Express for Node.js and Laravel for PHP
                </b>
              </i>
              to provide structured backend solution.
              <br />
              <br />
              Whenever I have the time, I often leverage my passion for personal
              projects as well as freelance work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-2" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zoo1sondv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/doanvanson/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/doansonbn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
