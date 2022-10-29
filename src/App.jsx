import "./styles/App.scss";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import React, { Suspense } from 'react'
import Layout from "./components/Layout";
const Home = React.lazy(()=>import("./pages/Home"));
const SingleArticle = React.lazy(()=>import("./pages/SingleArticle"));
const Category = React.lazy(()=>import("./pages/Category"));

function App() {
  return (
    <Suspense fallback={<div className="loadingPage"><span className="loader"/></div>}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
