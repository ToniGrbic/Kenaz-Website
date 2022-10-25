import "./styles/App.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./pages/SingleArticle";
import Category from "./pages/Category";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
      </Routes>
    </Layout>
  );
}

export default App;
