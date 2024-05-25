import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/NavBar';
import CodeHighlighter from '../../shared/CodeHighlighter';
import blog4 from './assets/blog4.png';
import {
  codeSnippetConcrete,
  codeSnippetDecorator,
  codeSnippetImpl,
  codeSnippetInterface,
  codeSnippetMain,
} from './code-snippets/codeSnippets';
import TextToSpeech from '../../utils/TextToSpeech';
import { speechOfBlog } from './text-to-speech/textToSpeech';
type Props = {};

function BlogFour({}: Props) {
  return (
    <div className='bg-slate-900'>
      <TextToSpeech text={speechOfBlog} />

      <Navbar />
      <div className='flex flex-col mx-4 md:mx-16 lg:mx-32 xl:mx-64 m-4 p-4 text-white font-mono gap-2'>
        <h1 className='text-3xl md:text-5xl font-bold py-4'>
          The Decorator Pattern |Adding Flavor To Your Objects
        </h1>

        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Imagine you’re hosting a dinner party and want to decorate your dining
          table. Instead of permanently altering the table, you use a tablecloth
          to add patterns or colors. Similarly, in Java, the decorator pattern
          allows you to dynamically add new behaviors or responsibilities to
          objects without altering their code directly, just like adding a
          tablecloth to decorate the table temporarily. Keep in mind that adding
          a table cloth doesn’t alter the purpose of the table, and that is the
          thing exactly done by the decorator pattern in the code.
        </p>
        <img
          src={blog4}
          alt='thumbnail'
          className='max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          Real world analogy
        </h4>
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>1.Component:</strong> The base interface or abstract class
            defining the common methods to be implemented by both concrete
            components and decorators.
          </li>
          <li>
            <strong>2.Concrete Component:</strong> A concrete implementation of
            the component interface, representing the base object to which we
            wish to add functionalities.
          </li>
          <li>
            <strong>3.Decorato:</strong> An abstract class implementing the
            component interface and holding a reference to a component object.
            It provides a common interface for all concrete decorators.
          </li>
          <li>
            <strong>4.Concrete Decorator:</strong> Classes that extend the
            decorator abstract class, adding new functionalities to the
            component by implementing additional methods or modifying existing
            ones.
          </li>
        </ul>

        <h4 className='text-xl md:text-2xl font-semibold mt-6'>
          Pattern In Practice
        </h4>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          Let’s take an example of a text editor. There are various types of
          texts like bold, italic ,underlined and etc. What is the basic
          component of all these types. It’s text!
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4 italic'>
          Component
        </p>
        <CodeHighlighter codeSnippet={codeSnippetInterface} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4 italic'>
          Concrete Component
        </p>
        <CodeHighlighter codeSnippet={codeSnippetConcrete} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          So where is the bold, italic, and underlined texts. What are those?
          Those are decorations that cover the concrete text component.
        </p>
        <p className='text-base md:text-lg leading-relaxed mt-4 italic'>
          Decorator
        </p>
        <CodeHighlighter codeSnippet={codeSnippetDecorator} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4 italic'>
          Concrete Decorators
        </p>
        <CodeHighlighter codeSnippet={codeSnippetImpl} language='Java' />
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          So that’s how we use decorators. If you want to try it out here is the
          main class.
        </p>
        <CodeHighlighter codeSnippet={codeSnippetMain} language='Java' />
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>Benefits</h4>
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>Flexibility:</strong> Decorators can be seamlessly added or
            removed at runtime, offering unparalleled flexibility in altering
            object behavior.
          </li>
          <li>
            <strong>Scalability:</strong>It empowers the creation of numerous
            combinations of functionalities without resorting to a convoluted
            class hierarchy.
          </li>
          <li>
            <strong>Maintainablitiy:</strong>By adhering to the Single
            Responsibility Principle, each decorator class retains a singular
            focus, fostering modularity and ease of maintenance.
          </li>
        </ul>
        <h4 className='text-xl md:text-2xl font-semibold mt-6'>Drawbacks</h4>
        <ul className='list-disc ml-6 md:text-lg leading-relaxed'>
          <li>
            <strong>Complexity:</strong> Implementing multiple layers of
            decorators can increase code complexity, making it challenging to
            manage interactions between decorators.
          </li>
          <li>
            <strong>Potential Overhead:</strong>Each decorator introduces a
            layer of indirection, potentially causing performance overhead,
            especially with many decorators involved.
          </li>
          <li>
            <strong>Limited Usefulness For Simple Objects:</strong>For simple
            objects requiring few additional functionalities, using the
            decorator pattern may be excessive.
          </li>
        </ul>
        <p className='text-base md:text-lg leading-relaxed mt-4'>
          So that’s about the decorator pattern if you want the full code you
          can take it from here . Don’t forget to star. Thank you for reading.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogFour;
