import { Outlet } from 'react-router-dom';
import Header from '../assets/pages/header/Header';
import Footer from '../assets/pages/footer/Footer';


const Main = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Main;
