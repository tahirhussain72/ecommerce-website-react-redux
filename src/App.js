import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './module/home/Home';
import {Router,Route, Routes} from 'react-router-dom'
import Product from './module/product/Index';
import Products from './module/Products/Index';
// import Home from './module/home/Home'

function App() {
  return (
    <div >
   <Header/>
   
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/products/:id" element={<Product/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path="*" element={<div>404</div>}></Route>


    </Routes>
  
   
   <Footer/>
    </div>
  );
}

export default App;
