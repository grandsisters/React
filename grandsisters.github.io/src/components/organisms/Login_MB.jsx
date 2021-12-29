import React from "react";
import styled from "styled-components";
import { AlsoDiv } from "../molecules";

const Login_MB = () => {
  return (
    <MainBlock>
      <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
      <LoginForm>
        <IdInput placeholder="전화번호, 사용자 이름 또는 이메일" />
        <PwInput placeholder="비밀번호" />
        <LoginBtn>로그인</LoginBtn>
      </LoginForm>
      <FormBottom>
        <AlsoDiv />
        <Etc>
          <a href="https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221hzp25txt8q7p18b1e5r16lfb5h1vuzpt2qjwdrn16xw5fu1ghbb2h%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D801aafd9-6904-4295-94a8-14b318d91f02%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221hzp25txt8q7p18b1e5r16lfb5h1vuzpt2qjwdrn16xw5fu1ghbb2h%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=touch&locale=ko_KR&pl_dbl=0&refsrc=deprecated&_rdr">
            Facebook으로 로그인
          </a>
          <a href="https://www.instagram.com/accounts/password/reset/">비밀번호를 잊으셨나요?</a>
        </Etc>
      </FormBottom>
    </MainBlock>
  );
};

const MainBlock = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 382px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 175px;
  height: 57;
  margin: 22px auto 12px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 258px;
  height: 36px;
  border-radius: 5px;
`;

const IdInput = styled(Input)``;

const PwInput = styled(Input)`
  margin-top: 5px;
`;

const LoginBtn = styled.button`
  width: 268px;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  background: rgb(38, 73, 99);
  color: white;
  font-weight: bolder;
`;

const FormBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Etc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: rgb(148, 177, 207);
  }

  a + a {
    margin-top: 15px;
  }
`;

export default Login_MB;
