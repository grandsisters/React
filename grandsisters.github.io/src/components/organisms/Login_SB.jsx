import React from "react";
import styled from "styled-components";

const Login_SB = () => {
  return (
    <SecondBlock>
      <p>
        계정이 없으신가요? <a href="https://www.instagram.com/accounts/signup/phone">가입하기</a>
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

export default Login_SB;
