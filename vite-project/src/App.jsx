
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles/App.scss'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import SingleArticle from "./pages/SingleArticle";
import Category from "./pages/Category";
function App() {
  
  
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/category/article" element={<SingleArticle />} />
      </Routes>
  )
}

export default App
