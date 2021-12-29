import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const CarouselData = [
    "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
  ];

  useEffect(() => {
    const changeActiveIndex = () => {
      const nextIndex = activeIndex === CarouselData.length - 1 ? 0 : activeIndex + 1;

      setActiveIndex(nextIndex);
    };
    setInterval(changeActiveIndex, 6000);
    return () => {
      clearInterval(changeActiveIndex);
    };
  }, [activeIndex]);

  return (
    <Wrapper>
      <BG src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" />
      {CarouselData.map((e, i) => (
        <Image key={e} src={e} active={i === activeIndex} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const BG = styled.img`
  width: 454px;
  height: 618px;
`;

const Image = styled.img`
  width: 246px;
  height: 435px;
  position: absolute;
  top: 96px;
  left: 148px;
  opacity: 0;
  transition: opacity 2s ease-in;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      transition: opacity 2s ease-out;
    `};
`;

export default Carousel;
