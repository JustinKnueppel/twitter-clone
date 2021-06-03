import Head from "next/head";
import styled from "styled-components";

const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 0 auto;
`;

const Nav = styled.nav`
  flex-grow 1;
`;

const Main = styled.main`
  flex-grow 2;
`;

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home / Twitter</title>
        <meta name="description" content="Clone of Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Nav>
          <div>Hello</div>
        </Nav>
        <Main>
          <div>Hello</div>
          <div>Hello</div>
        </Main>
      </Content>
    </div>
  );
};

export default Home;
