import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubAlt,
    faTwitter,
    faLinkedin,
    faInstagramSquare,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <footer class="footer text-center" id="contact">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            11/4 Appapillai Kahder Street
                            <br />
                            Ambur, TN 635802
                        </p>
                    </div>

                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-dark btn-social mx-1" href="https://github.com/Babu-Mohammed-Izhan"><FontAwesomeIcon icon={faGithubAlt} /></a>
                        <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/babu_izhan"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="btn btn-outline-dark btn-social mx-1" href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>

                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">Phone Number</h4>
                        <p class="lead mb-0">
                            +91 99445 45113
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
