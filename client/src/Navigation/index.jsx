import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Header } from '../Components/Header';
import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Menu from '../Pages/Menu';
import Cart from '../Pages/Cart';
import PaymentSuccess from '../Pages/PaymentSuccess';


const Navigation = () => {
    return(
        <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />


        </Routes>

        </BrowserRouter>
    )
}

export default Navigation;