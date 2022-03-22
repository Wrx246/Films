import React, { Suspense, lazy } from "react";
import st from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route} from "react-router-dom";
import Preloader from "./UI/Preloader/Preloader";

const Content = lazy(() => import("./components/Content/Content"));
const About = lazy(() => import("./components/About/About"));
const TopRated = lazy(() => import("./components/TopRated/TopRated"));
const MyList = lazy(() => import("./components/MyList/MyList"));
const FilmDetails = lazy(() => import("./components/FilmDetails/FilmDetails"));
const Registration = lazy(() => import("./components/Registration/Registration"));
const SignIn = lazy(() => import("./components/SignIn/SignIn"));

const App = () => {
  return (
    <div className={st.App}>
        <Header />
        <Suspense fallback={<div className={st.preloader}><Preloader/></div>}>
        <Routes>
            <Route exact path='/' element={<Content />} />
            <Route path='/about' element={<About />} />
            <Route path='/top_rated' element={<TopRated />} />
            <Route path='/my_list' element={<MyList />} />
            <Route path='/movie/:id' element={<FilmDetails />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<SignIn />} />
        </Routes>
        </Suspense>
        <Footer />
    </div>
  );
}

export default App;
