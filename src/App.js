import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from './components/routes/Home/Home'
import About from './components/routes/About/About'

const App = () => (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
    </div>
);

export default App;
