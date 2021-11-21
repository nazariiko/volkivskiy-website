import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Blog } from '../data/blog';

const StyledBlogItem = styled.div`
  margin: 30px;
  padding: 30px 20px;
  width: 350px;
  min-height: 400px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
    margin-bottom: 10px;
  }

  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
    opacity: 0.7;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    margin-top: auto;
    margin-bottom: 20px;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

const StyledButton = styled.button`
  display: block;
  max-width: 200px;
  text-transform: uppercase;
  padding: 20px 50px;
  background-color: black;
  cursor: pointer;
  color: white;
  border: none;
  margin-top: auto;
`;

const BlogItem: React.FC<Blog> = ({ heading, text, date, url }) => {
  const { t } = useTranslation();

  return (
    <StyledBlogItem>
      <h2>{heading}</h2>
      <span>{date}</span>
      <p>{text}</p>
      <a href={url} target="_blank" rel="noreferrer">
        <StyledButton>{t('blog.read')}</StyledButton>
      </a>
    </StyledBlogItem>
  );
};

export default BlogItem;
