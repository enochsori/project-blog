"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  children: React.ReactNode;
};

const MultiCarousel = ({ children }: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>
  );
};

export default MultiCarousel;
