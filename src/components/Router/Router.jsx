import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Error from '../Error/Error';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
