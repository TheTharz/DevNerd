import React from 'react';

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <section className='bg-white text-black py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-4xl font-bold'>Welcome to DevNerd</h1>
          <p className='mt-4 text-lg'>
            Explore the latest in technology and coding with our insightful
            articles.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
