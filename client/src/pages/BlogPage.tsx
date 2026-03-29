import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageTitle = styled.h1`
  margin-bottom: 40px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const BlogCard = styled(Link)`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  overflow: hidden;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #224390, #1a3366);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BlogContent = styled.div`
  padding: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .date {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const BlogPage: React.FC = () => {
  const blogs = [
    { id: 1, title: 'How to Create a Successful Campaign', date: 'Mar 15, 2024' },
    { id: 2, title: 'Stories of Success: Student Fundraising', date: 'Mar 10, 2024' },
    { id: 3, title: 'Financial Aid Tips for Students', date: 'Mar 5, 2024' },
  ];

  return (
    <Container>
      <PageTitle>Blog</PageTitle>
      <BlogGrid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} to={`/blog/${blog.id}`}>
            <BlogImage>Blog Image</BlogImage>
            <BlogContent>
              <h3>{blog.title}</h3>
              <p className="date">{blog.date}</p>
              <p>Read the full story and learn from our community...</p>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Container>
  );
};

export default BlogPage;
