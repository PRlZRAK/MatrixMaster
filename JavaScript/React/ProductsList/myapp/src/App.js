import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NewProductPage from "./Pages/NewProductPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductInfoPage from "./Pages/ProductInfoPage";
import ProductEditPage from "./Pages/ProductEditPage";
function App() {
  return (
    <BrowserRouter basename="/products">
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/new" element={<NewProductPage />} />
        <Route path="/show/:id" element={<ProductInfoPage />} />
        <Route path="/edit/:id" element={<ProductEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
