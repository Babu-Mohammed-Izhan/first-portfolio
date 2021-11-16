import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" bg="light">
      <Row>
        <Col className="title">
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col className="about-section" xs={12}>
          <h4 className="about-text">
            I have been a web developer since May 2021, but ever since 12th
            Standard I have had a passion for creating websites and making them
            beautiful. Everytime I would see a website it intrigued me and made
            me wonder how all of it worked.
          </h4>
          <h4 className="about-text">
            From then on I have been studying and working hard on improving my
            skills. There has been many roadblocks along the way, but my goals
            are very clear and I am determined I can reach them in the future.
          </h4>
        </Col>
      </Row>
    </section>
  );
};

export default About;
