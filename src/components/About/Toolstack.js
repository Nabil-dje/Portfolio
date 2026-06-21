import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import canva from "../../Assets/TechIcons/Canva.svg";
import windows  from "../../Assets/TechIcons/Windows 8.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={windows} alt="windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={canva} alt="canva" className="tech-icon-images" />
        <div className="tech-icons-text">Canva</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
