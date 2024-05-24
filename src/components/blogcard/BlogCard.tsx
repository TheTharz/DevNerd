import React from 'react';
import { Blog } from '../../interfaces/Blog';

const BlogCard: React.FC<Blog> = ({
  title,
  thumbnail,
  description,
  tags,
  Component,
}) => {
  return (
    <a
      href='#'
      className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4 mx-auto w-full md:w-3/4 lg:w-2/3'
    >
      <img
        className='object-fit w-full md:w-1/2 rounded-l-lg h-64 md:h-auto'
        src={thumbnail}
        alt=''
      />
      <div className='flex flex-col justify-between p-4 w-full md:w-1/2'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <div className='flex flex-wrap'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='mr-2 mb-2 px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
