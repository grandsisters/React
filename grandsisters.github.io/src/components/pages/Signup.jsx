import React from "react";
import styled from "styled-components";
import { Signup_MB, Signup_SB, AppDownload } from "../organisms";

const Signup = () => {
  return (
    <Wrapper>
      <Signup_MB />
      <Signup_SB />
      <AppDownload />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 10%;
  left: 35%;
`;

export default Signup;
