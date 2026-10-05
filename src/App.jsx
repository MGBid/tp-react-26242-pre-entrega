import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';

import './App.css'

function App() {


  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<h1>Bienvvenida</h1>} />
      </Routes>
    </main>

      
    </>
  )
}

export default App
