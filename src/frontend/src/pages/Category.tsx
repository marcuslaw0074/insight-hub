import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import CategoryNews from '../components/CategoryNews';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 1rem;
`;

const Layout = styled.div`
  display: flex;
`;

const Sidebar = styled.aside`
  flex: 1;
  padding: 1rem;
  background: #f4f4f4;
  margin-right: 1rem;
`;

const Content = styled.main`
  flex: 3;
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

const categories = [
  { name: 'Generative AI', path: '/categories/generative-ai' },
  { name: 'Machine Learning', path: '/categories/machine-learning' },
  { name: 'Robotics', path: '/categories/robotics' },
];

const newsSample: News[] = [
  { title: 'AI News 1', summary: 'Summary 1', date: '2023-06-21', source: 'Source 1' },
  { title: 'AI News 2', summary: 'Summary 2', date: '2023-06-22', source: 'Source 2' },
  { title: 'AI News 3', summary: 'Summary 3', date: '2023-06-23', source: 'Source 3' },
];

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredNews = selectedCategory
    ? newsSample.filter(news => news.title.includes(selectedCategory))
    : newsSample;

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Categories</h1>
        <Layout>
          <Sidebar>
            <CategoryList categories={categories} />
          </Sidebar>
          <Content>
            <CategoryNews news={filteredNews} />
          </Content>
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

export default Category;
