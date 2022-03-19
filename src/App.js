import { Route, Routes } from "react-router-dom";
import Menu from "./component/Header/Menu";
import ProductList from "./component/products/ProductList";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<ProductList />} />

      </Routes>
    </div>
  );
}

export default App;
