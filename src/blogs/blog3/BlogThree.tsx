import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/NavBar';
import CodeHighlighter from '../../shared/CodeHighlighter';
import {
  codeSnippetSuper,
  codeSnippetSub,
  codeSnippetParent,
  codeSnippetMain,
  codeSnippetEncapsulation,
  codeSnippetConcrete,
  codeSnippetChild,
  codeSnippetAbstract,
} from './code-snippets/codeSnippets';
import blog3 from './assets/blog3.png';
import TextToSpeech from '../../utils/TextToSpeech';
import { speechOfBlog } from './text-to-speech/textToSpeech';
type Props = {};

function BlogThree({}: Props) {
  return (
    <div className='bg-slate-900'>
      <TextToSpeech text={speechOfBlog} />
      <Navbar />
      <div className='flex flex-col mx-4 md:mx-16 lg:mx-32 xl:mx-64 m-4 p-4 text-white font-mono gap-2'>
        <h1 className='text-3xl md:text-5xl font-bold py-4'>
          Exploring Object-Oriented Programming (OOP) Concepts in Java
        </h1>
        <img
          src={blog3}
          alt='thumbnail'
          className='max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          In the previous article, we discussed the fundamental concepts of
          classes and objects in Java, the building blocks of object-oriented
          programming (OOP). Now, let’s delve deeper into four essential OOP
          concepts: Inheritance, Encapsulation, Polymorphism, and Abstraction.
          We’ll explore each concept with examples in Java to understand their
          significance in modern software development.
        </p>
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>1.Inheritance:</strong> Inheritance is a key OOP concept
            that allows a class (subclass) to inherit properties and behaviors
            from another class (superclass). This promotes code reusability and
            establishes a hierarchical relationship among classes. In Java,
            inheritance is achieved using the “extends” keyword.
          </li>
        </ul>
        <p className='text-base md:text-lg leading-relaxed mt-4'>Example:</p>
        <CodeHighlighter codeSnippet={codeSnippetSuper} language='Java' />
        <CodeHighlighter codeSnippet={codeSnippetSub} language='Java' />
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>2.Encapsulation: </strong> Encapsulation is the bundling of
            data (attributes) and methods (behaviors) within a single unit
            (class), and restricting direct access to the data by making it
            private. Access to the data is provided through methods (getters and
            setters), which ensures data integrity and enhances security.
          </li>
        </ul>
        <p className='text-base md:text-lg leading-relaxed mt-4'>Example:</p>
        <CodeHighlighter
          codeSnippet={codeSnippetEncapsulation}
          language='Java'
        />
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>3.Polymorphism:</strong>
            Polymorphism allows objects to take on multiple forms, enabling
            methods to behave differently based on the object’s type. In Java,
            polymorphism is achieved through method overriding and method
            overloading.
          </li>
        </ul>

        <p className='text-base md:text-lg leading-relaxed mt-4'>Example:</p>
        <CodeHighlighter codeSnippet={codeSnippetParent} language='Java' />
        <CodeHighlighter codeSnippet={codeSnippetChild} language='Java' />
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>4.Abstraction:</strong> Abstraction focuses on hiding
            complex implementation details and showing only the essential
            features of an object. In Java, abstraction is achieved through
            abstract classes and interfaces.
          </li>
        </ul>

        <p className='text-base md:text-lg leading-relaxed mt-4'>Example:</p>
        <CodeHighlighter codeSnippet={codeSnippetAbstract} language='Java' />
        <CodeHighlighter codeSnippet={codeSnippetConcrete} language='Java' />
        <CodeHighlighter codeSnippet={codeSnippetMain} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          So in conclusion understanding and implementing these four OOP
          concepts — Inheritance, Encapsulation, Polymorphism, and Abstraction —
          are crucial for building modular, maintainable, and scalable software
          applications in Java. By leveraging these concepts effectively,
          developers can design robust and flexible systems that meet the
          demands of modern software development.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogThree;
