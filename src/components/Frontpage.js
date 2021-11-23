import undraw from "../undraw.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedin,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Frontpage = () => {
  return (
    <section id="frontpage">
      <div className="row" id="frontpage-text">
        <div className="col-sm-6 hero hero-left">
          <h1 id="first-line">Hello</h1>
          <h2 id="second-line">I'm Izhan</h2>
          <h2 id="second-line">I am a Web Developer</h2>
          <div className="icons">
            <a
              className="btn btn-outline-dark btn-social mx-1"
              href="https://github.com/Babu-Mohammed-Izhan"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
            <a
              className="btn btn-outline-dark btn-social mx-1"
              href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="btn btn-outline-dark btn-social mx-1"
              href="https://twitter.com/babu_izhan"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="btn btn-outline-dark btn-social mx-1"
              href="mailto:babuizhan1234@gmail.com"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </div>
        <div className="col-sm-6 hero-right hero ">
          <div className="undraw">
            <img src={undraw} alt="undraw" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontpage;
