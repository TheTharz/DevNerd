import Navbar from '../../components/navbar/NavBar';
import CodeHighlighter from '../../shared/CodeHighlighter';
import image from './assets/image.png';
import file from './assets/file.png';
import architecture from './assets/architecture.png';
import {
  CodeSnippet1,
  CodeSnippetIndexjs,
  CodeSnippetDatabasejs,
  CodeSnippetUserRoute,
  CodeSnippetUserController,
  CodeSnippetAuthMiddleware,
  CodeSnippetAuthHelper,
  CodeSnippetUserModel,
} from './code-snippets/codeSnipptes';
import Footer from '../../components/footer/Footer';
type Props = {};

function BlogOne({}: Props) {
  const codeSnippet = `
    // Your code snippet here
    const greet = (name: string): string => {
      return \`Hello, \${name}!\`;
    };
    console.log(greet('World'));
  `;

  return (
    <>
      <Navbar />

      <div className='flex justify-center items-center flex-col mx-64 m-4 p-4'>
        <h1 className=' text-5xl font-bold py-4'>
          Building Robust and Scalable MERN Backends: A Practical Guide
        </h1>
        <img
          src={image}
          alt='thumbnail'
          className=' max-w-3xl h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <p>
          In the world of making websites and apps work smoothly, how we
          organize things behind the scenes is super important. Think of it like
          having a well-organized kitchen — it makes cooking (or coding) much
          easier! Because when the kitchen grows and it starts cooking more
          things(more features) it is very important to have a scalable file and
          folder structure. Understanding the file and folder structure helps
          you to scale your app in a effective way. Enough talk, let’s dive in.
        </p>
        <h4>File And Folder Structure</h4>
        <img
          src={file}
          alt='file'
          className=' max-w-3xl h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />
        <CodeHighlighter codeSnippet={codeSnippet} language='TypeScript' />
        <p>Let’s understand one by one.</p>
        <p>app.js:</p>
        <ul>
          <li>
            Purpose: The app.js file is often the entry point of your backend
            application. It's where you initialize your server, set up
            middleware, and define how routes are handled.
          </li>
          <li>
            Example Usage: Inside app.js, you might set up Express (or another
            framework), configure middleware, and connect routes to their
            respective controllers.
          </li>
          <li>
            Note that sometimes some developers implement above code in index.js
            file. But for the clarity I prefer making a separate app.js file.
          </li>
        </ul>
        <p>index.js:</p>
        <ul>
          <li>
            Purpose: The index.js file is another entry point for your
            application. It's commonly used to start the server or bootstrap the
            application. It may import and execute code from other files,
            initializing the overall application structure.
          </li>
          <li>
            Example Usage: In index.js, you might import and run app.js,
            initiating the server and starting your backend application.
          </li>
        </ul>
        <p>config Folder:</p>
        <ul>
          <li>
            Purpose: The config folder typically contains configuration files
            for your backend application. These files may include settings
            related to databases, environment variables, third-party services,
            and other global configurations.
          </li>
          <li>
            Example Usage: You might have a database.js file inside config to
            specify your database connection details.
          </li>
        </ul>

        <p>helpers Folder:</p>

        <ul>
          <li>
            Purpose: The helpers folder typically contains utility functions or
            helper modules that are used across different parts of your
            application. These functions can assist with common tasks, enhancing
            code reusability.
          </li>
          <li>
            Example Usage: You might have a validationHelper.js file inside
            helpers that contains functions for validating user input.
          </li>
        </ul>
        <p>middleware Folder:</p>
        <ul>
          <li>
            Purpose: The middleware folder is where you store functions or
            modules that intercept and process requests before they reach the
            route handler. Middleware functions can be used for tasks like
            authentication, logging, or modifying request data.
          </li>
          <li>
            Example Usage: A file named authMiddleware.js could handle user
            authentication before allowing access to certain routes.
          </li>
        </ul>
        <p>models Folder:</p>
        <ul>
          <li>
            Purpose: The models folder typically contains files representing
            data structures and interactions with your database. Each model file
            defines how data is structured and may include operations for
            retrieving, updating, and deleting data.
          </li>
          <li>
            Example Usage: A file named User.js could define the structure of a
            user in your application and include functions for database
            operations related to users.
          </li>
        </ul>
        <CodeHighlighter codeSnippet={CodeSnippet1} language='TypeScript' />
        <p>
          Above is the app.js, here you can see there is server initialization
          and then some middleware setups. Also bottom you can see some
          different routes are handled.
        </p>
        <CodeHighlighter
          codeSnippet={CodeSnippetIndexjs}
          language='TypeScript'
        />
        <p>
          Here is the index.js file which use to start the server and boottrap
          your application. You can see that it imports the server from app.js
          file hiding the code behind app.js file which helps to maintain the
          code clarity.
        </p>

        <CodeHighlighter
          codeSnippet={CodeSnippetDatabasejs}
          language='TypeScript'
        />

        <p>
          Here is the database.js file that configure the database connectivity.
          Here I have used mongodb as the database. This file is in the config
          folder. This connectDB() function is imported to app.js file. When
          application starts the database connection will be automatically done.
        </p>

        <CodeHighlighter
          codeSnippet={CodeSnippetUserRoute}
          language='TypeScript'
        />

        <p>
          In the app.js file there were some routes handled. Here is the full
          rout file. Here you can see various routes for various operations on
          user. As well as you can see in each route there are some specific
          functions. These routes will be called from the frontend to access the
          userinfo and do some operations on them.
        </p>

        <CodeHighlighter
          codeSnippet={CodeSnippetUserController}
          language='TypeScript'
        />

        <p>
          Previously in routes, there was specific functions for each route.
          Like as an example
        </p>

        <CodeHighlighter
          codeSnippet={`router.route('/createuser').post(createUser);`}
          language='TypeScript'
        />

        <p>
          In this route there is a function called, that is createUser. So this
          createUser function is actually implemented in the userController.js
          file. Similarly for other routes , the relevant functions are
          implemented on the controller file. That means this is where the logic
          happens.
        </p>

        <CodeHighlighter
          codeSnippet={CodeSnippetAuthMiddleware}
          language='TypeScript'
        />

        <p>
          For some API endpoints, to give the access to user we have to verify
          the user. For a situation like that we can use a middleware. Here
          checkAuth is a middleware function which checks whether the user is
          logged in or not before giving access to some API endpoints.
        </p>

        <p>As an example we can take,</p>

        <CodeHighlighter
          codeSnippet={`router.route('/updateuser/:id').put(checkAuth, updateUser);`}
          language='TypeScript'
        />

        <p>
          Here you can see before updateUser function it checks the checkAuth
          function. If the checkAuth is successful then user can access the
          updateUser endpoint otherwise he can’t.
        </p>

        <CodeHighlighter
          codeSnippet={CodeSnippetAuthHelper}
          language='TypeScript'
        />

        <p>
          This is an example for a helper class where we store reusable code
          snippets. This example shows some functions that can be reused in the
          code. This might be not necessary but for keeping code clear I follow
          thi approach.
        </p>

        <CodeHighlighter
          codeSnippet={CodeSnippetUserModel}
          language='TypeScript'
        />

        <p>
          Inside user.js , we define the schema for a user using a technology
          like Mongoose, which is a MongoDB object modeling tool designed to
          work in an asynchronous environment like Node.js. The schema outlines
          the properties and data types associated with a user, such as
          username, email, password (hashed for security), and any additional
          information needed for your application.
        </p>

        <h4>Very high level overview of the way an endpoint works</h4>

        <img
          src={architecture}
          alt='thumbnail'
          className=' max-w-3xl h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'
        />

        <p>
          The diagram above illustrates a simplified version of how an endpoint
          works in a MERN backend. Here's a step-by-step breakdown:
        </p>
        <ol>
          <li>
            Request Arrival: A request is sent to a specific endpoint (e.g.,
            /createuser).
          </li>
          <li>
            Middleware Interception (Optional): If applicable, middleware
            functions are executed to perform preliminary tasks like
            authentication or logging.
          </li>
          <li>
            Route Matching: The request is matched to the appropriate route
            defined in the routes folder.
          </li>
          <li>
            Controller Function Execution: The corresponding controller
            function, containing the business logic, is called.
          </li>
          <li>
            Model Interaction (Optional): If data needs to be retrieved or
            modified, controller functions interact with models in the models
            folder to access the database.
          </li>
          <li>
            Response Generation: The controller function prepares a response,
            often containing data or a success/error message.
          </li>
          <li>Response Sending: The response is sent back to the client.</li>
        </ol>

        <h4>Key Points for Maintainability and Scalability</h4>
        <ul>
          <li>
            Clear Separation of Concerns: The structure promotes modularity,
            making code easier to understand, maintain, and test.
          </li>
          <li>
            Modular Middleware: Middleware enhances code organization and
            reusability, allowing for flexible request handling.
          </li>
          <li>
            Organized Models: Models encapsulate data interactions, ensuring
            consistency and simplifying database operations.
          </li>
          <li>
            Dedicated Controllers: Controllers handle business logic, keeping
            code focused and promoting reusability.
          </li>
          <li>
            Centralized Routes: Routes define API endpoints in a clear and
            manageable way.
          </li>
          <li>
            Helper Functions for Reusability: Helpers promote code efficiency
            and maintainability by encapsulating common tasks.
          </li>
        </ul>

        <h4>Additional Considerations:</h4>
        <ul>
          <li>
            Error Handling: Implement robust error handling mechanisms to ensure
            graceful error responses and maintain application stability.
          </li>
          <li>
            Testing: Write comprehensive tests for controllers, models, and
            middleware to ensure code quality and prevent regressions.
          </li>
          <li>
            Documentation: Provide clear documentation for each component to
            guide collaboration and maintainability.
          </li>
          <li>
            Security: Implement security measures to protect against
            vulnerabilities and unauthorized access, such as input validation
            and authentication.
          </li>
        </ul>

        <h4>Additional Considerations:</h4>

        <p>
          Error Handling: Implement robust error handling mechanisms to ensure
          graceful error responses and maintain application stability. Testing:
          Write comprehensive tests for controllers, models, and middleware to
          ensure code quality and prevent regressions. Documentation: Provide
          clear documentation for each component to guide collaboration and
          maintainability. Security: Implement security measures to protect
          against vulnerabilities and unauthorized access, such as input
          validation and authentication.
        </p>

        <p>
          So I hope this helps you to get good understanding on backend
          structure for a simple scalable web app. If you want to explore more
          you can visit my{' '}
          <a
            href='https://github.com/TheTharz/BlogApp'
            target='_blank'
            className=' underline hover:text-blue-500'
          >
            github
          </a>{' '}
          repo. Thank you for reading!.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default BlogOne;
