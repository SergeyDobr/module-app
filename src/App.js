import Registration from './components/Registration';
import Authorization from './components/Authorization';
import Homepage from './components/Homepage';
import CategoriesPage from './components/CategoriesPage';
import { Layout } from './components/Layout';
import { Routes, Route } from "react-router-dom"
import CategoryDetail from './components/CategoryDetail';
import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='categories/:categoryId' element={<CategoryDetail />} />
        <Route path='categories/:categoryId/:productId' element={<ProductDetail />} />
        <Route path='registration' element={<Registration />} />
        <Route path='authorization' element={<Authorization />} />
        <Route path='basket' element={<Basket />} />
        <Route path='*' element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
