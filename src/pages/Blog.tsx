import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import BlogItem from '../components/BlogItem';

import { blogs } from '../data/blog';

const StyledBlog = styled.div``;

const StyledBlogList = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0px;
`;

const Blog = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <StyledBlog>
      <Loader visible={isLoading} />
      <Header page={'blog'} />
      <StyledBlogList>
        {blogs &&
          blogs.map((blog, index) => (
            <BlogItem
              heading={blog.heading}
              text={blog.text}
              date={blog.date}
              url={blog.url}
              key={index}
            />
          ))}
      </StyledBlogList>
      <Footer />
    </StyledBlog>
  );
};

export default Blog;
