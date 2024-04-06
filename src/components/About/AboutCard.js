import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Doan Van Son </span>
            from <span className="purple"> Ha Noi, Viet Nam.</span>
            <br />
            I am currently employed as a software developer at NTQ Solution.
            <br />
            <span>
              I have completed my Bachelor's program in Information Security at
              the Academy of Cryptography Techniques (KMA).
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating In Volunteering
            </li>
          </ul>
          <p>
            <span className="purple">My motto is</span>
            <p style={{ color: "rgb(155 126 172)" }}>
              "Be a better version of yourself every single day"
            </p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
