import styled, { css } from "styled-components";
import { useState } from "react";

const PostImageList = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const handlePrv = () => {
  //   if (activeIndex === 0) return setActiveIndex(data.length - 1);
  //   setActiveIndex(activeIndex - 1);
  // };

  // const handleNxt = () => {
  //   if (data.length - 1 === activeIndex) return setActiveIndex(0);
  //   setActiveIndex(activeIndex + 1);
  // };

  const handleIndex = (n) => {
    setActiveIndex((prev) => prev + n);
  };

  return (
    <Wrapper>
      {/* <PostList>
        {data.map((e, i) => (
          <Post key={e.id} src={e.image} active={activeIndex === i} />
        ))}
      </PostList> */}
      <PostList activeIndex={activeIndex}>
        {data.map(({ id, image }) => (
          <Post key={id} src={image} />
        ))}
      </PostList>
      {1 < data.length && (
        <>
          {0 !== activeIndex && <PrvBtn onClick={() => handleIndex(-1)}>{"<"}</PrvBtn>}
          {data.length - 1 !== activeIndex && <NxtBtn onClick={() => handleIndex(1)}>{">"}</NxtBtn>}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* height: 600px; */
  position: relative;
  overflow: hidden;
`;

const PostList = styled.ul`
  display: flex;
  align-items: center;
  transform: ${({ activeIndex }) => `translateX(${-612 * activeIndex}px)`};
  transition: transform 0.5s ease-in;
`;

const Post = styled.img`
  /* width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `} */

  min-width: 100%;
`;

const Btn = styled.button`
  position: absolute;
  z-index: 100;
  top: 50%;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: 1px solid;
  opacity: 0.5;
  font-weight: bold;
  &:hover {
    opacity: 1;
  }
`;

const PrvBtn = styled(Btn)`
  left: 5px;
`;
const NxtBtn = styled(Btn)`
  right: 5px;
`;

export default PostImageList;
