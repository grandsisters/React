import React from "react";
import styled from "styled-components";

const Also = () => {
  return (
    <AlsoDiv>
      <Horizion />
      <p>또는</p>
      <Horizion />
    </AlsoDiv>
  );
};

const Horizion = styled.div`
  width: 103px;
  border: 1px solid black;
`;

const AlsoDiv = styled.div`
  width: 268px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export default Also;
