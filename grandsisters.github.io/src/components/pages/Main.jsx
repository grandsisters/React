import React from "react";
import styled from "styled-components";
import { TopNav } from "../organisms";
import { PostList, ShortList } from "../organisms/";
import ShortData from "../../data/ShortData";
import PostData from "../../data/PostData";

const Main = () => {
  return (
    <Page>
      <TopNav />
      <PageWrapper>
        <Left>
          <ShortList data={ShortData} />
          <PostList data={PostData} />
        </Left>
        <Right></Right>
      </PageWrapper>
    </Page>
  );
};

const Page = styled.div`
  background: #fafafa;
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  padding-top: 90px;
  max-width: 975px;
  margin: 0 auto;
`;

const Left = styled.div`
  margin-right: 28px;
`;
const Right = styled.div``;

export default Main;
