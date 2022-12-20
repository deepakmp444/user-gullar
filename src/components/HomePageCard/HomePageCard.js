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

function HomePageCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/product/jeans">
            <img
              className="mx-auto d-block TwoImgHead"
              src={WomenJean}
              alt=""
            />
          </Link>
        </Col>
        <Col>
          <img src={MenTShirt} className="mx-auto d-block TwoImgHead" alt="" />
        </Col>
      </Row>
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
