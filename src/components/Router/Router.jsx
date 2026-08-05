import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Error from '../Error/Error';
import Layout from '../Layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
