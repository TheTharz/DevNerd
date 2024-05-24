import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-500 p-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <a href='/' className='text-white text-2xl font-bold'>
              DevNerd
            </a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-white hover:text-gray-200 focus:outline-none focus:text-gray-200'
              onClick={toggleNavbar}
            >
              <svg
                className='h-6 w-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
                />
              </svg>
            </button>
          </div>

          {/* Navbar links */}
          <div className='hidden md:flex space-x-4'>
            <a href='/' className='text-white hover:text-gray-200'>
              Home
            </a>
            <a href='/DevNerd/about' className='text-white hover:text-gray-200'>
              About
            </a>
            <a href='/DevNerd/blog' className='text-white hover:text-gray-200'>
              Blog
            </a>
            <a
              href='/DevNerd/contact'
              className='text-white hover:text-gray-200'
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden px-2 pt-2 pb-3 space-y-1'>
          <a href='/' className='text-white block hover:text-gray-200'>
            Home
          </a>
          <a href='/about' className='text-white block hover:text-gray-200'>
            About
          </a>
          <a href='/blog' className='text-white block hover:text-gray-200'>
            Blog
          </a>
          <a href='/contact' className='text-white block hover:text-gray-200'>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
