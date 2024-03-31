import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Header } from '../Components/Header';

const Navigation = () => {
    return(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
    )
}

export default Navigation;