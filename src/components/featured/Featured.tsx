import React from 'react';
import { blogs } from '../../blogs';
import BlogCard from '../blogcard/BlogCard';

type Props = {};

function Featured({}: Props) {
  return (
    <div className=''>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          thumbnail={blog.thumbnail}
          description={blog.description}
          tags={blog.tags}
          Component={blog.Component}
        />
      ))}
    </div>
  );
}

export default Featured;
