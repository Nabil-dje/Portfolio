import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import media from "../../Assets/Projects/media.jpg";
import birmo from "../../Assets/Projects/birmo.jpg";
import store from "../../Assets/Projects/screenshot-for-readme.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birmo}
              isBlog={false}
              title="OPGI"
              description="Graduation Project. platform developed for employees of the OPGI (Office de Promotion et de Gestion Immobilière) under the Algerian Ministry of Housing. The application allows employees to efficiently consult and monitor their allocated budgets, manage daily tasks, and access important work-related information through a centralized interface."
              ghLink="https://github.com/Oozy007/OPGI"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Store"
              description="Store is a modern e-commerce platform designed for selling computer hardware, electronic devices, accessories, and various technology-related products. The platform provides customers with a seamless online shopping experience, allowing them to browse products, manage their carts, place orders, and track purchases efficiently"
              ghLink="https://github.com/Nabil-dje/Store"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={media}
              isBlog={false}
              title="Social Media"
              description="SocialConnect is a social networking platform inspired by Twitter/X, designed to enable users to share thoughts, interact with others, and stay connected in real time. The application allows users to create posts, follow other users, engage through likes and comments, and build their own online community."
              ghLink="https://github.com/Nabil-dje/Media"
                          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
