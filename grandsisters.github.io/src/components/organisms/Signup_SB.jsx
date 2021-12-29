import React from "react";
import styled from "styled-components";

const Signup_SB = () => {
  return (
    <SecondBlock>
      <p>
        계정이 있으신가요? <a href="https://www.instagram.com/accounts/login/?hl=ko&source=auth_switcher">로그인</a>
      </p>
    </SecondBlock>
  );
};

const SecondBlock = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 60px;
  margin-top: 10px;
  text-align: center;

  & > p > a {
    text-decoration: none;
    color: rgb(54, 172, 250);
  }
`;

export default Signup_SB;
