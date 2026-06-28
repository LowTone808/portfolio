import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout/MainLayout'
import Register from '../pages/Register/Register'
import Etusivu from '../pages/Etusivu/Etusivu'
import Palvelut from '../pages/Palvelut/Palvelut'
import Yhteystiedot from '../pages/Yhteystiedot/Yhteystiedot'
import Kirjaudu from '../pages/Kirjaudu/Kirjaudu'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Etusivu />} />
        <Route path="palvelut" element={<Palvelut />} />
        <Route path="yhteystiedot" element={<Yhteystiedot />} />
        <Route path="kirjaudu" element={<Kirjaudu />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default AppRouter