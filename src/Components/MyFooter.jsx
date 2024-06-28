import { Col, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Row className="justify-content-center mt-5">
      <Col class="col col-6">
        <Row class="row">
          <Col class="col mb-2">
            <Facebook className="mx-2"></Facebook>
            <Instagram className="mx-2"></Instagram>
            <Twitter className="mx-2"></Twitter>
            <Youtube className="mx-2"></Youtube>
          </Col>
        </Row>
        <Row sm={2} md={4} lg={4}>
          <Col>
            <Row>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <div class="row">
          <div class="col mb-2">
            <button type="button" class="btn btn-sm footer-button rounded-0 mt-3">
              Service Code
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
        </div>
      </Col>
    </Row>
  );
};

export default MyFooter;
