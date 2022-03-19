import { Route, Routes } from "react-router-dom";
import Menu from "./component/Header/Menu";
import ProductDetail from "./component/products/ProductDetail";
import ProductList from "./component/products/ProductList";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/details" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
