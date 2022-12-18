import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../assests/Home/Carousel/JacketPoster.png";
import Carousel2 from "../../assests/Home/Carousel/shirtPoster.png";
import Carousel3 from "../../assests/Home/Carousel/gogglePoster.png";
import Carousel4 from "../../assests/Home/Carousel/ShoePoster.png";

function CarouselComponent() {
  return (
    <Carousel className="carousel" style={{ marginTop: "55px" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel4} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
