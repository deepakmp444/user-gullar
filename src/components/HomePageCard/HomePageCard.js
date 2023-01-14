import { Container } from "react-bootstrap";
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

function HomePageCard() {
  return (
    <Container>
      <div className="center">
        <div className="">
          <Link to="/product/jeans">
            <LazyLoadImage
              className="heightOfImg widthOfImg me-5"
              src={WomenJean}
              effect="blur"
            />
          </Link>
        </div>
        <div className="">
          <LazyLoadImage
            src={MenTShirt}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
      </div>

      <div className="flex-container mt-3 flex-container-side">
        <div className="item">
          <LazyLoadImage
            src={Goggle}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
        <div className="item">
          <LazyLoadImage
            src={Jack}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
        <div className="item">
          <LazyLoadImage
            src={Blazers}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
        <div className="item">
          <LazyLoadImage
            src={Coat}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
        <div className="item">
          <LazyLoadImage
            src={Sweater}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
        <div className="item">
          <LazyLoadImage
            src={Tops}
            className="heightOfImg widthOfImg"
            effect="blur"
          />
        </div>
      </div>

      <div className="mt-2">
        <LazyLoadImage
          src={ProfessionalShirt}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />
      </div>
      <div className="mt-2">
        <LazyLoadImage
          src={Shoe}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />
      </div>
      <div className="mt-2">
        <LazyLoadImage
          src={Hoodie}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />
      </div>
    </Container>
  );
}

export default HomePageCard;
