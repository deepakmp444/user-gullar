import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../assests/Home/Carousel/JacketPoster.png";
import Carousel2 from "../../assests/Home/Carousel/shirtPoster.png";
import Carousel3 from "../../assests/Home/Carousel/gogglePoster.png";
import Carousel4 from "../../assests/Home/Carousel/ShoePoster.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CarouselComponent() {
  return (
    <Carousel className="carousel" style={{ marginTop: "55px" }}>
      <Carousel.Item>
        <LazyLoadImage
          src={Carousel1}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadImage
          src={Carousel2}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadImage
          src={Carousel3}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />

        <img className="d-block w-100" src={Carousel3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadImage
          src={Carousel4}
          className="heightOfBigImg widthOfBigImg"
          effect="blur"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
