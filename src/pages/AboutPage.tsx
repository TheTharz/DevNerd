import Navbar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';

function AboutPage() {
  return (
    <div className='bg-slate-900 min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex flex-col mx-4 md:mx-16 lg:mx-32 xl:mx-64 m-4 p-4 text-white font-mono flex-grow'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center'>
          About Me
        </h1>
        <div className='text-base md:text-lg lg:text-xl leading-relaxed'>
          <p className='mb-4'>
            Hi, I'm Tharindu Jayawardhana, a passionate software developer with
            a love for creating innovative solutions and exploring new
            technologies. I specialize in full-stack development and have a deep
            understanding of modern web development practices.
          </p>
          <p className='mb-4'>
            With a background in computer science, I have developed a diverse
            skill set that includes front-end and back-end development, database
            management, and cloud computing. I enjoy working on challenging
            projects that push the boundaries of my knowledge and allow me to
            grow as a developer.
          </p>
          <p className='mb-4'>
            In my free time, I like to contribute to open-source projects, write
            technical blogs, and stay up-to-date with the latest industry
            trends. I believe in continuous learning and strive to improve my
            skills every day.
          </p>
          <p className='mb-4'>
            Feel free to connect with me on social media or reach out to discuss
            potential collaborations. I'm always open to new opportunities and
            enjoy meeting like-minded professionals.
          </p>
        </div>
        <div className='flex justify-center mt-8 space-x-4'>
          <a
            href='https://www.linkedin.com/in/tharindu-jayawardana/'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='mr-2' /> LinkedIn
          </a>
          <a
            href='https://github.com/TheTharz'
            className='bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='mr-2' /> GitHub
          </a>
          <a
            href='mailto:tharinduimalka915@gmail.com'
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300'
          >
            <FaEnvelope className='mr-2' /> Email Me
          </a>
          <a
            href='https://tharindujayawardhana.me'
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGlobe className='mr-2' /> Website
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
