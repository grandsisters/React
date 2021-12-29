import React from "react";
import styled from "styled-components";

const ShortList = ({ data }) => {
  console.log(data);
  return (
    <ShortListWrapper>
      {data.map((e) => (
        <EachShort key={e.img}>
          <ImgWrapper>
            <Short src={e.img}></Short>
          </ImgWrapper>
          <ShortId>{e.id}</ShortId>
        </EachShort>
      ))}
    </ShortListWrapper>
  );
};

const ShortListWrapper = styled.div`
  width: 614px;
  height: 118px;
  border: 1px solid #dbdbdb;
  display: flex;
`;

const EachShort = styled.div`
  width: 80px;
  height: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  border: 2.5px solid red;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
`;

const Short = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 35px;
`;

const ShortId = styled.span`
  height: 15px;
  max-width: 74px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
`;

export default ShortList;
