import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white shadow dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          {/* Logo and Name */}
          <a
            href='/DevNerd/'
            className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            {/* Insert your logo image or icon here */}
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              DevNerd
            </span>
          </a>
          {/* Social Links */}
          <ul className='flex items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center gap-4'>
            <li>
              <a
                href='https://www.linkedin.com/in/tharindu-jayawardana/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                <FaLinkedin className='h-5 w-5' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/TheTharz'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                <FaGithub className='h-5 w-5' />
              </a>
            </li>
            <li>
              <a
                href='mailto:tharinduimalka915@gmail.com'
                className='hover:underline'
              >
                <FaEnvelope className='h-5 w-5' />
              </a>
            </li>
            <li>
              <a
                href='https://tharindujayawardhana.me'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                <FaExternalLinkAlt className='h-5 w-5' />
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © {new Date().getFullYear()}{' '}
          <a
            href='https://tharindujayawardhana.me/'
            className='hover:underline'
          >
            Tharindu Jayawardhana
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
