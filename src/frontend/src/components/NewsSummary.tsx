import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

interface NewsSummaryProps {
  title: string;
  summary: string;
  date: string;
  source: string;
}

const NewsSummary: React.FC<NewsSummaryProps> = ({ title, summary, date, source }) => {
  return (
    <SummaryContainer>
      <h2>{title}</h2>
      <p>{summary}</p>
      <small>{date} - {source}</small>
    </SummaryContainer>
  );
};

export default NewsSummary;
