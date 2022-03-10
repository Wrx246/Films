import React from "react";
import st from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import TopRated from "./components/TopRated/TopRated";
import MyList from "./components/MyList/MyList";
import FilmDetails from "./components/FilmDetails/FilmDetails";
import {useSelector} from "react-redux";
import Registration from "./components/Registration/Registration";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
    const movie = useSelector((state) => state.movieReducer.movie);
  return (
    <div className={st.App}>
        <Header />
        <Routes>
            <Route exact path='/' element={<Content />} />
            <Route path='/about' element={<About />} />
            <Route path='/top_rated' element={<TopRated />} />
            <Route path='/my_list' element={<MyList />} />
            <Route path='/movie/:id' element={<FilmDetails />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
