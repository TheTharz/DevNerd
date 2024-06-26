import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { blogs } from './blogs';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/DevNerd/' element={<HomePage />} />
        <Route path='/DevNerd/about/' element={<AboutPage />} />

        {/* Error route goes here */}

        <Route path='*' element={<ErrorPage />} />

        {/*Blog routes are added here */}
        {blogs.map((blog, index) => (
          <Route
            key={index}
            path={`/blog/${blog.title}`}
            element={<blog.Component />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
