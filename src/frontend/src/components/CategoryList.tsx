import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryListContainer = styled.div`
  padding: 1rem;
`;

const CategoryItem = styled.div`
  margin: 0.5rem 0;
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface Category {
  name: string;
  path: string;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <CategoryListContainer>
      {categories.map((category, index) => (
        <CategoryItem key={index}>
          <Link to={category.path}>{category.name}</Link>
        </CategoryItem>
      ))}
    </CategoryListContainer>
  );
};

export default CategoryList;
