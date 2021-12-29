import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ImgHome, Message, New, Find, Activity } from "../../assets/images";

const TopNav = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const HandleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <Header>
      <HeaderWrapper>
        <Link to="/">
          <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        </Link>
        <Nav>
          <SearchWrapper>
            <SearchInput placeholder="검색" />
          </SearchWrapper>
        </Nav>
        <NavMenu>
          <ImgHome />
          <Message />
          <New />
          <Find />
          <Activity />
          <ProfileWrapper onClick={HandleDropdown}>
            <Profile src="https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-i/200/contacts-128.png" />
            <ProfileDropdown active={dropdownActive}>
              <MyProfile>프로필</MyProfile>
              <Saved>저장됨</Saved>
              <Config>설정</Config>
              <ChangeAccount>계정 전환</ChangeAccount>
              <Logout>로그아웃</Logout>
            </ProfileDropdown>
          </ProfileWrapper>
        </NavMenu>
      </HeaderWrapper>
    </Header>
  );
};

const Header = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  max-width: 975px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 104px;
  cursor: pointer;
  vertical-align: bottom;
`;

const SearchWrapper = styled.div`
  width: 268px;
  height: 36px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 242px;
  height: 18px;
  border: none;
`;

const Nav = styled.nav``;

const NavMenu = styled.div`
  width: 278px;
  height: 24px;
  display: flex;
  justify-content: space-evenly;
  position: relative;

  & > *:hover {
    cursor: pointer;
  }
`;

const Profile = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid black;
  border-radius: 15px;
`;

const ProfileWrapper = styled.div``;

const ProfileDropdown = styled.ul`
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 1;
  border: 1px solid black;

  padding: 0;
  background: white;
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const list = styled.li`
  padding: 10px;

  &:hover {
    background: grey;
  }
`;

const MyProfile = styled(list)``;
const Saved = styled(list)``;
const Config = styled(list)``;
const ChangeAccount = styled(list)``;
const Logout = styled(list)`
  border-top: 1px solid black;
`;

export default TopNav;
