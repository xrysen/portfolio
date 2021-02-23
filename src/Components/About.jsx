import "./About.scss";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about-container">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Education and Training
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Card.Text>
                Diploma of Web Development from{" "}
                <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>
              </Card.Text>
              <Card.Text>
              Introduction to Computer Science
                <a href="https://www.edx.org/course/cs50s-introduction-to-computer-science"> Harvard CS50</a>
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Languages I've Worked With
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Javascript
              <ProgressBar now={90} />
              HTML
              <ProgressBar now={95} />
              CSS
              <ProgressBar now={88} />
              SQL
              <ProgressBar now={85} />
              C
              <ProgressBar now={70} />
              C#
              <ProgressBar now={60} />
              Python
              <ProgressBar now={40} />
              Ruby
              <ProgressBar now={35} />
              Java
              <ProgressBar now={30} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Frameworks and Libraries I've Used
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              React
              <ProgressBar now={70} />
              React-native
              <ProgressBar now={60} />
              Node
              <ProgressBar now={90} />
              Express
              <ProgressBar now={90} />
              jQuery
              <ProgressBar now={85} />
              Bootstrap
              <ProgressBar now={70} />
              Unity3d
              <ProgressBar now={60} />
              GameMaker Studio
              <ProgressBar now={70} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Testing Suites I've Worked With
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Mocha/Chai
              <ProgressBar now={70} />
              Jest
              <ProgressBar now={60} />
              Cyprus
              <ProgressBar now={55} />
              Storybook
              <ProgressBar now={53} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Contact Me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <a href="mailto:sean.oyler@gmail.com" className="icon-link"><FontAwesomeIcon className = "icon" icon={faEnvelopeSquare} /></a>
              <FontAwesomeIcon className = "icon" icon={faGithub} onClick={()=> window.open("https://github.com/xrysen")} />
              <FontAwesomeIcon className = "icon" icon={faLinkedin} onClick={()=> window.open("https://www.linkedin.com/in/sean-oyler-20337370/")} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default About;
