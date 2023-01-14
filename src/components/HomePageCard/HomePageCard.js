import { Col, Container, Row } from "react-bootstrap";
import "../../styles/HomePageCard.css";
import MenTShirt from "../../assests/Home/T-Shirt_landing.png";
import WomenJean from "../../assests/Home/Jeans_Landing.png";
import Goggle from "../../assests/Home/Goggle_landing.png";
import Blazers from "../../assests/Home/Blazers_landing.png";
import Jack from "../../assests/Home/JackLanding.png";
import Coat from "../../assests/Home/CoatLanding.png";
import Sweater from "../../assests/Home/Sweater_landing.png";
import Tops from "../../assests/Home/TopsLanding.png";
import ProfessionalShirt from "../../assests/Home/ProfessionalShirtPoster.png";
import Hoodie from "../../assests/Home/HoodiePoster.png";
import Shoe from "../../assests/Home/ShoeLanding.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HomePageCard() {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div className="me-5">
          <Link to="/product/jeans">
            <LazyLoadImage
              className="heightOfImg widthOfImg"
              src={WomenJean}
              effect="blur"
            />
          </Link>
        </div>
        <div>
          <LazyLoadImage
            src={MenTShirt}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
      </div>
      <Row>
        <Col>
          <img src={Goggle} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
        <Col>
          <img src={Jack} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
        <Col>
          <img src={Blazers} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Coat} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
        <Col>
          <img src={Sweater} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
        <Col>
          <img src={Tops} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
      </Row>

      <Row className="mt-2">
        <img src={ProfessionalShirt} alt="" />
      </Row>
      <Row className="mt-2">
        <img src={Shoe} alt="" />
      </Row>
      <Row className="mt-2">
        <img src={Hoodie} alt="" />
      </Row>
    </Container>
  );
}

export default HomePageCard;
