/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CartProvider from './routing/context/cartContext';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />

                    {/* <Route path='/products' element={<PrivateRoute />}> */}
                    <Route path='/products' element={<ItemListContainer />} />
                    {/* </Route> */}

                    <Route path='/products/:categoryId' element={<ItemListContainer />} />
                    <Route path='/product/:productId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
