import React from "react";
import st from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { Routes, Route} from "react-router-dom";
import About from "./components/About/About";

const App = () => {
  return (
    <div className={st.App}>
        <Header />
        <Routes>
            <Route exact path='/' element={<Content />} />
            <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
