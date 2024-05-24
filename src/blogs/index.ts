import { Blog } from '../interfaces/Blog';
import BlogOne from './blog1/BlogOne';
import BlogTwo from './blog2/BlogTwo';
import BlogThree from './blog3/BlogThree';
import BlogFour from './blog4/BlogFour';

export const blogs: Blog[] = [
  {
    Component: BlogOne,
    title: 'Blog One',
    description: 'Blog One',
    thumbnail: 'https://via.placeholder.com/150',
    tags: ['one'],
  },
];
