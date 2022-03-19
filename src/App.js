import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./component/Header/Menu";
import ProductDetail from "./component/products/ProductDetail";
import ProductList from "./component/products/ProductList";
import Shop from "./component/Shop/Shop";

function App() {
  const [productId, setProductId] = useState('')

  const getId = (id) => {
    setProductId(id)
  }
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<ProductList getId={getId} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/details" element={<ProductDetail productId={productId} />} />
      </Routes>
    </div>
  );
}

export default App;
