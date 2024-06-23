import React from 'react';
import Header from '../components/Header';
import NewsSummary from '../components/NewsSummary';
import TopNewsCarousel from '../components/TopNewsCarousel';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 1rem;
`;

const Sidebar = styled.aside`
  flex: 1;
  padding: 1rem;
  background: #f4f4f4;
  margin-left: 1rem;
`;

const Content = styled.main`
  flex: 3;
`;

const Layout = styled.div`
  display: flex;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;
`;

interface News {
  title: string;
  summary: string;
  date: string;
  source: string;
}

const topNewsSample: News[] = [
  { title: 'Top AI News 1', summary: 'Summary 1', date: '', source: '' },
  { title: 'Top AI News 2', summary: 'Summary 2', date: '', source: '' },
  { title: 'Top AI News 3', summary: 'Summary 3', date: '', source: '' },
];

const newsSample: News[] = [
  { title: 'AI News 1', summary: 'Summary 1', date: '2023-06-21', source: 'Source 1' },
  { title: 'AI News 2', summary: 'Summary 2', date: '2023-06-22', source: 'Source 2' },
  { title: 'AI News 3', summary: 'Summary 3', date: '2023-06-23', source: 'Source 3' },
];

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Welcome to AI News</h1>
        <TopNewsCarousel topNews={topNewsSample} />
        <Layout>
          <Content>
            {newsSample.map((news, index) => (
              <NewsSummary
                key={index}
                title={news.title}
                summary={news.summary}
                date={news.date}
                source={news.source}
              />
            ))}
          </Content>
          <Sidebar>
            <h2>Trending Topics</h2>
            <ul>
              <li>Generative AI</li>
              <li>Machine Learning</li>
              <li>Robotics</li>
            </ul>
          </Sidebar>
        </Layout>
      </MainContainer>
      <Footer>
        <p>&copy; 2024 AI News</p>
        <nav>
          <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
        </nav>
      </Footer>
    </>
  );
};

export default Home;
