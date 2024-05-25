import Navbar from '../../components/navbar/NavBar';
import CodeHighlighter from '../../shared/CodeHighlighter';
import {
  codeSnippetCar,
  codeSnippetConstructor,
  codeSnippetFull,
  codeSnippetGetters,
  codeSnippetMethod,
  codeSnippetObject,
} from './code-snippets/codeSnippets';
import Footer from '../../components/footer/Footer';
import blog2 from './assets/blog2.png';
import analogy from './assets/analogy.png';
import TextToSpeech from '../../utils/TextToSpeech';
import { speechOfBlog } from './text-to-speech/textToSpeech';
type Props = {};

function BlogTwo({}: Props) {
  return (
    <div className='bg-slate-900'>
      <TextToSpeech text={speechOfBlog} />
      <Navbar />
      <div className='flex flex-col mx-4 md:mx-16 lg:mx-32 xl:mx-64 m-4 p-4 text-white font-mono gap-2'>
        <h1 className='text-3xl md:text-5xl font-bold py-4'>
          Understanding Object-Oriented Programming (OOP) Concepts in Java
        </h1>
        <img
          src={blog2}
          alt='thumbnail'
          className='max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Object-Oriented Programming (OOP) is a paradigm widely used in modern
          software development for building robust, scalable, and maintainable
          applications. Java, as a popular programming language, fully supports
          OOP principles, making it essential for developers to have a solid
          understanding of OOP concepts. In this introductory article, we’ll
          explore the classes and object and how they are implemented in Java.
        </p>
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            Classes and Objects: At the core of OOP is the concept of classes
            and objects. A class is a blueprint for creating objects, defining
            their properties (attributes) and behaviors (methods). Objects are
            instances of classes that represent real-world entities or concepts.
            In Java, classes are declared using the class keyword, and objects
            are created using the new keyword followed by the class name.
          </li>
        </ul>
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          Real world analogy
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Imagine you are going to implement a car in your code. Oh no what is
          the data type you are going to use? Is there any data type called car.
          I don’t think so. So what you are going to do is, you are going to
          create a template for your car. That is your class( car class). So you
          are going to map real world features of the car in to your code.
        </p>
        <img
          src={analogy}
          alt='thumbnail'
          className='max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <CodeHighlighter codeSnippet={codeSnippetCar} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          OK, now you have a code block for representing a car. But how we are
          going to declare it. We can initialize a car using{' '}
          <strong>new</strong> keyword, but before that we need to add a
          constructor.
        </p>
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>Constructor</h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          A constructor is a special method in a class that is called when an
          instance of the class is created. It allows us to initialize the
          object’s state, i.e., set initial values for its attributes. In Java,
          a constructor has the same name as the class and does not have a
          return type.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          We can add a constructor to our <strong>Car</strong> class to
          initialize its attributes when creating a new car object. Here's how
          we can modify the <strong>Car</strong> class to include a constructor:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetConstructor} language='Java' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          Getters and Setters :
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Getters and setters are methods used to retrieve and modify the values
          of private attributes in a class, respectively. They provide
          controlled access to the attributes of an object, allowing us to
          maintain encapsulation and data integrity.
        </p>
        <CodeHighlighter codeSnippet={codeSnippetGetters} language='Java' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>Methods :</h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Methods in a class represent the behaviors or actions that objects of
          that class can perform. They encapsulate the logic associated with
          performing specific tasks or operations on the object’s data.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Going back to our car class, we had start method in our real car. Okay
          let’s implement it in the code.
        </p>
        <CodeHighlighter codeSnippet={codeSnippetMethod} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Our final car class will look like this after we add all the
          methods.(Keep in mind these methods can be more complex than this)
        </p>
        <CodeHighlighter codeSnippet={codeSnippetFull} language='Java' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          Demo: Creating a Car Object:
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Now, let’s see how we can create a car object and use it in our code:
        </p>
        <CodeHighlighter codeSnippet={codeSnippetObject} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          In this demo, we create a <strong>Car</strong> object named{' '}
          <strong>myCar</strong> using the constructor we defined earlier. We
          then invoke methods on the <strong>myCar</strong> object to perform
          actions like starting the car.
        </p>
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          What have we done today and what will be coming?
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          In this introductory article, we’ve explored the fundamental concepts
          of Object-Oriented Programming (OOP) and how they are implemented in
          Java. We’ve learned about classes and objects, which serve as
          blueprints and instances, respectively, for modeling real-world
          entities or concepts in our code.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          By breaking down the analogy of implementing a car into code, we’ve
          discussed the importance of constructors in initializing object states
          and how getters and setters maintain encapsulation and data integrity
          by providing controlled access to object attributes.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Furthermore, we’ve implemented various methods in our Car class to
          represent behaviors or actions that car objects can perform, such as
          starting, accelerating, stopping, and applying brakes.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Lastly, we demonstrated how to create a <strong>Car</strong> object
          and utilize its methods in a simple Java program.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          In the upcoming articles of this series, we’ll delve deeper into
          advanced OOP concepts such as inheritance, polymorphism, abstraction,
          and encapsulation, exploring their implementation in Java and their
          significance in building complex and scalable applications.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Stay tuned for more insights and practical examples in our continuing
          journey through Object-Oriented Programming concepts in Java!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogTwo;
