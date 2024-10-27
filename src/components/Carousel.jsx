import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../hinh/img7.png";
import img2 from "../hinh/img22.png";
import img3 from "../hinh/img33.png";
import img4 from "../hinh/img44.png";
import img5 from "../hinh/img55.png";
import '../css/Gallery.css'

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const images = [img1, img2, img3, img4,img5];

  return (
    <Carousel
      activeIndex={currentSlide}
      onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 anhphat"  src={image} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
