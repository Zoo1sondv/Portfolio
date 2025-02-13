import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SChat from "../../assets/projects/SChat.png";
import ITCenter from "../../assets/projects/ITCenter.png";
import boxStudio from "../../assets/projects/boxStudio.png";
import bookingCare from "../../assets/projects/bookingCare.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SChat}
              title="SChat"
              description="Personal Chat Room to share resources and hangout with friends build with NextJS, Express NodeJS, and TailwindCSS. Have features which allow users for realtime messaging, image, emoji sharing, as well as Video Call, Voice Call. Its most distinctive feature is the end-to-end encryption (E2EE) process for sending and receiving messages."
              demoLink="https://schat-e2ee.doanvanson.id.vn/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={boxStudio}
              title="Box Studio"
              description="Box Studio is a landing page providing services in marketing, media, & multi-platform digital content. It is written in React.js and Bootstrap."
              demoLink="https://box-studio.doanvanson.id.vn/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bookingCare}
              title="Booking Care"
              description="Booking Care is a system that helps patients schedule medical appointments. Additionally, it includes an admin page to assist in managing doctors, hospital rooms, and doctor schedules. It is written in ReactJS and Express NodeJS."
              demoLink="https://bookingcare.doanvanson.id.vn/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ITCenter}
              title="IT Center"
              description="The IT center is a software written in React.js, PHP Laravel, and Bootstrap. It has key features such as searching for courses, creating posts, creating questions, searching for posts, questions,..."
              demoLink="https://itcenter.doanvanson.id.vn/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
