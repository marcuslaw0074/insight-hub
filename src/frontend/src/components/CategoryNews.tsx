import React from 'react';
import styled from 'styled-components';

const CategoryNewsContainer = styled.div`
  padding: 1rem;
`;

const NewsItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

interface News {
  title: string;
  summary: string;
  date: string;
  source: string;
}

interface CategoryNewsProps {
  news: News[];
}

const CategoryNews: React.FC<CategoryNewsProps> = ({ news }) => {
  return (
    <CategoryNewsContainer>
      {news.map((newsItem, index) => (
        <NewsItem key={index}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.summary}</p>
          <small>{newsItem.date} - {newsItem.source}</small>
        </NewsItem>
      ))}
    </CategoryNewsContainer>
  );
};

export default CategoryNews;
