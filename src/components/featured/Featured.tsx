import React from 'react';
import { blogs } from '../../blogs';

type Props = {};

function Featured({}: Props) {
  return (
    <div className='container mx-auto p-4'>
      {blogs.map((blog, index) => (
        <div key={index} className='mb-8'>
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className='w-full h-64 object-cover mb-4'
          />
          <h2 className='text-2xl font-bold'>{blog.title}</h2>
          <p className='text-gray-600 mb-2'>{blog.description}</p>
          <div className='flex flex-wrap mb-4'>
            {blog.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className='bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'
              >
                {tag}
              </span>
            ))}
          </div>
          <blog.Component />
        </div>
      ))}
    </div>
  );
}

export default Featured;
