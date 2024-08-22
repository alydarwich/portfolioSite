import { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  useEffect(() => {
    document.title = 'Ali\'s Portfolio';
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          
          
          <Route path="contact" element={<Contact />} />
          
          
        </Route>
      </Routes>
    </>
  );
}

export default App;