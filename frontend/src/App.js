import './App.css';
import Navbar from './Compenents/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Footer from './Compenents/Footer/Footer';
import men_banner from './Compenents/Assets/banner_mens.png';
import women_banner from './Compenents/Assets/banner_women.png';
import kid_banner from './Compenents/Assets/banner_kids.png';

function App() {  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/mens" element={<ShopCategory banner={men_banner} category='mens' />} />
          <Route exact path="/womens" element={<ShopCategory banner={women_banner} category='womens' />} />
          <Route exact path="/kids" element={<ShopCategory banner={kid_banner} category='kids' />} />
          {/* Route corrigée pour un produit spécifique */}
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />


          <Route exact path="/login" element={<LoginSingup />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

