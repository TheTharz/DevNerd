import { Blog } from '../interfaces/Blog';
import BlogOne from './blog1/BlogOne';
import BlogTwo from './blog2/BlogTwo';
import BlogThree from './blog3/BlogThree';
import BlogFour from './blog4/BlogFour';
import BlogFive from './blog5/BlogFive';
import image from './blog1/assets/image.png';
import blog2 from './blog2/assets/blog2.png';
import blog3 from './blog3/assets/blog3.png';
import blog4 from './blog4/assets/blog4.png';
import blog5 from './blog5/assets/blog5.png';

export const blogs: Blog[] = [
  {
    Component: BlogOne,
    title: 'Building Robust and Scalable MERN Backends: A Practical Guide',
    description: `In the world of making websites and apps work smoothly, how we
      organize things behind the scenes is super important. Think of it like
      having a well-organized kitchen — it makes cooking (or coding) much
      easier! Because when the kitchen grows and it starts cooking more
      things (more features) it is very important to have a scalable file
      and folder structure. Understanding the file and folder structure
      helps you to scale your app in an effective way. Enough talk, let’s
      dive in.`,
    thumbnail: image,
    tags: ['React', 'JavaScript', 'Frontend', 'MERN'],
  },
  {
    Component: BlogTwo,
    title: 'Understanding Object-Oriented Programming (OOP) Concepts in Java',
    description:
      'Object-Oriented Programming (OOP) is a paradigm widely used in modern software development for building robust, scalable, and maintainable applications. Java, as a popular programming language, fully supports OOP principles, making it essential for developers to have a solid understanding of OOP concepts. In this introductory article, we’ll explore the classes and object and how they are implemented in Java.',
    thumbnail: blog2,
    tags: ['OOP', 'Concepts', 'Java', 'Beginner'],
  },
  {
    Component: BlogThree,
    title: 'Exploring Object-Oriented Programming (OOP) Concepts in Java',
    description:
      'In the previous article, we discussed the fundamental concepts of classes and objects in Java, the building blocks of object-oriented programming (OOP). Now, let’s delve deeper into four essential OOP concepts: Inheritance, Encapsulation, Polymorphism, and Abstraction. We’ll explore each concept with examples in Java to understand their significance in modern software development.',
    thumbnail: blog3,
    tags: ['Abstraction', 'Encapsulation', 'Inheritence', 'Polymorphism'],
  },
  {
    Component: BlogFour,
    title: 'The Decorator Pattern |Adding Flavor To Your Objects',
    description:
      'Imagine you’re hosting a dinner party and want to decorate your dining table. Instead of permanently altering the table, you use a tablecloth to add patterns or colors. Similarly, in Java, the decorator pattern allows you to dynamically add new behaviors or responsibilities to objects without altering their code directly, just like adding a tablecloth to decorate the table temporarily. Keep in mind that adding a table cloth doesn’t alter the purpose of the table, and that is the thing exactly done by the decorator pattern in the code.      ',
    thumbnail: blog4,
    tags: ['Decorator', 'OOP', 'Pattern', 'Architecting'],
  },
  {
    Component: BlogFive,
    title:
      'How to Set Up an SSH Connection Between a Virtual Machine and Host Machine',
    description: `SSH (Secure Shell) is a powerful protocol used for securely accessing remote systems over a network. In this guide, we’ll walk through the steps to set up and test an SSH connection between a guest OS (virtual machine) and a host machine using VirtualBox and Ubuntu-based systems.`,
    thumbnail: blog5,
    tags: ['SSH', 'Linux', 'Cloud', 'Security'],
  },
];
