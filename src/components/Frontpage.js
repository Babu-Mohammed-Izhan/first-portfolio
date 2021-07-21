import { Container, Row, Col, } from "react-bootstrap"
import { ReactComponent as Undraw } from '../undraw.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faTwitter,
    faLinkedin,
    faInstagramSquare,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

const Frontpage = () => {
    return (
        <Container id="frontpage">
            <Row id="frontpage-text">
                <Col sm={5}>
                    <h1 id="first-line">Hello</h1>
                    <h2 id="second-line">I'm Izhan</h2>
                    <h2 id="second-line">I am a Web Developer</h2>
                    <div className="icons">
                        <a class="btn btn-outline-dark btn-social mx-1" href="https://github.com/Babu-Mohammed-Izhan"><FontAwesomeIcon icon={faGithubAlt} /></a>
                        <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/babu_izhan"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="btn btn-outline-dark btn-social mx-1" href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </Col>
                <Col sm={7}>
                    <Undraw className="undraw" />
                </Col>
            </Row>
        </Container >
    )
}

export default Frontpage
