import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import MainLayout from './layouts/MainLayout';
import SingleArticle from './components/SingleArticle';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/:id" element={<SingleArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
