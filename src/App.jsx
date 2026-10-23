import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './App.css'

function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<h1>Bienvenida</h1>} />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
