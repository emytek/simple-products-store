import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewProduct from './pages/NewProduct';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div>
    <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
         {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
         )}

        {/* {user && (
            <>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </>
          )} */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
         <Route path="/new-product" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
