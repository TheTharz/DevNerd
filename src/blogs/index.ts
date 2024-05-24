import { Blog } from '../interfaces/Blog';
import BlogOne from './blog1/BlogOne';
import BlogTwo from './blog2/BlogTwo';
import BlogThree from './blog3/BlogThree';
import BlogFour from './blog4/BlogFour';
import image from './blog1/assets/image.png';

export const blogs: Blog[] = [
  {
    Component: BlogOne,
    title: 'Getting Started with React Hooks',
    description:
      'Learn the basics of React Hooks and how to use them in your projects.',
    thumbnail: image,
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    Component: BlogTwo,
    title: 'Introduction to Node.js and Express',
    description:
      'Explore the fundamentals of Node.js and build a RESTful API with Express.',
    thumbnail: image,
    tags: ['Node.js', 'Express', 'Backend'],
  },
  {
    Component: BlogThree,
    title: 'Modern CSS Techniques for Web Development',
    description:
      'Discover modern CSS techniques and best practices for building responsive web designs.',
    thumbnail: image,
    tags: ['CSS', 'Web Design', 'Frontend'],
  },
  {
    Component: BlogFour,
    title: 'Advanced JavaScript Concepts: Closures and Prototypes',
    description:
      'Deep dive into advanced JavaScript concepts like closures and prototypes.',
    thumbnail: image,
    tags: ['JavaScript', 'Programming', 'Web Development'],
  },
];
