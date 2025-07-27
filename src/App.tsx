import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
