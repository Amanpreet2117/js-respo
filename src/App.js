import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/home';
import Footer from './component/footer';
import Header from './component/header';
import About from './pages/about';
import Servises from './pages/servises';
import Contact1 from './pages/contact1';
import Project1 from './pages/project1';
import API from './pages/API';
import Product from './component/product';
// import Try from './try api';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='service/' element={<Servises/>}/>
      <Route path='contact/' element={<Contact1/>}/>
      <Route path='project/' element={<Project1/>}/>
      <Route path='API/' element={<API/>}/>
      <Route path='product/' element={<Product/>}/>




  </Routes>
   <Footer/>
   </Router>
   
   </>
  );
}

export default App;
