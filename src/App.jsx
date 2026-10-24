import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<h1>Carrito</h1>} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='/mision-vision' element={<h1>Misión & Visión</h1>} />
        <Route path='/about-us' element={<ItemDetailContainer />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
