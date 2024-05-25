import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { blogs } from './blogs';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/*Blog routes are added here */}
        {blogs.map((blog, index) => (
          <Route
            key={index}
            path={`/blog/${blog.title}`}
            element={<blog.Component />}
          />
        ))}

        <Route path='/about' element={<AboutPage />} />

        {/* Error route goes here */}

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
