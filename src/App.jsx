import Contact from '@/pages/contact/Contact'
import Digimon from '@/pages/digimon/Digimon'
import Favs from '@/pages/favs/Favs'
import Home from '@/pages/home/Home'
import NotFound from '@/pages/notFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/digimon/:id'
          element={<Digimon />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/favs'
          element={<Favs />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
