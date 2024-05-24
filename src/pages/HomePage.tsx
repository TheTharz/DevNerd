import About from '../components/about/About';
import Featured from '../components/featured/Featured';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/NavBar';

function HomePage() {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
