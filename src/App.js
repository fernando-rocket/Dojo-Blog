import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact={true} element={<Home/>}></Route>
        <Route path='/create' exact={true} element={<Create/>}></Route>
        <Route path='/blogs/:id' exact={true} element={<BlogDetails/>}></Route>
        <Route path='*' exact={true} element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
