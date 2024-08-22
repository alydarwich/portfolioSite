import { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Tech from './components/About/Tech';
import Dev from './components/About/Dev';



function App() {
  useEffect(() => {
    document.title = 'Ali\'s Portfolio';
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about/tech" element={<Tech />} />
          <Route path="about/dev" element={<Dev />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;