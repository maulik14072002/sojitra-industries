import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Layout.css'
import './assets/css/App.css'

import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import Quality from './page/Quality';
import Contact from './page/Contact';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
