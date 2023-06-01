import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import {Toaster} from 'react-hot-toast';

import "./styles/app.scss"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Toaster />
    </BrowserRouter>
  );
}

export default App;
