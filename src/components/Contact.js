import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faTwitter,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <footer className="footer text-center" id="contact">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Phone Number</h4>
                        <p className="lead mb-0">
                            +91 99445 45113
                        </p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Babu-Mohammed-Izhan"><FontAwesomeIcon icon={faGithubAlt} /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/babu_izhan"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>

                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Email Address</h4>
                        <p className="lead mb-0">
                            babuizhan1234@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
