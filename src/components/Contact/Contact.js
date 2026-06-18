import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { AiOutlineSend, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import "./Contact.css";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // ⚠️ Remplace ces valeurs par tes identifiants EmailJS (https://www.emailjs.com)
    const SERVICE_ID = "service_feqqnft";
    const TEMPLATE_ID = "template_iy09xad";
    const PUBLIC_KEY = "blZ-yLc8gR6_mnmXH";

    const templateParams = {
      from_firstname: formData.firstName,
      from_lastname: formData.lastName,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Particle />
        <Row className="justify-content-center">
          <Col md={8} className="contact-card">
            <h1 className="contact-title">
              <span className="purple">Contact me</span>
            </h1>
            <p className="contact-subtitle">
              A question, an idea or an opportunity? Send me a message!
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="firstName">
                      <BsPerson className="form-icon" /> First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      <AiOutlineUser className="form-icon" /> Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </Col>
              </Row>

              <div className="form-group">
                <label htmlFor="email">
                  <AiOutlineMail className="form-icon" /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                />
              </div>

              <div className="submit-wrapper">
                <button
                  type="submit"
                  className="fork-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send <AiOutlineSend className="send-icon" />
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <p className="status-message success">
                  ✅ Message sent successfully! I will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="status-message error">
                  ❌ An error occurred. Please try again.
                </p>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;