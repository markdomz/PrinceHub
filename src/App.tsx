import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Atlas from './pages/Atlas';
import Quiz from './pages/Quiz';
import QuizSession from './pages/QuizSession';

import AtlasRegion from './pages/AtlasRegion';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atlas" element={<Atlas />} />
            <Route path="/atlas/:regionId" element={<AtlasRegion />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/quiz/:id" element={<QuizSession />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
