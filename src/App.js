import './App.css';
import { Routes, Route } from 'react-router-dom';
import Router from './routes/Router.js';
import PageNotFound from './layouts/PageNotFound.js';
import Home from "./components/Home.js"
import Recipt from './components/Recipt.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/BillMaker' element={<Home />} />
        <Route path='/recipt' element={<Recipt />} />
        <Route path='/route/*' element={<Router />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
