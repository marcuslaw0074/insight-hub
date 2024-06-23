import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem 0;
`;

const CarouselItem = styled.div`
  min-width: 300px;
  margin-right: 1rem;
`;

interface News {
  title: string;
  summary: string;
}

interface TopNewsCarouselProps {
  topNews: News[];
}

const TopNewsCarousel: React.FC<TopNewsCarouselProps> = ({ topNews }) => {
  return (
    <CarouselContainer>
      {topNews.map((news, index) => (
        <CarouselItem key={index}>
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default TopNewsCarousel;
