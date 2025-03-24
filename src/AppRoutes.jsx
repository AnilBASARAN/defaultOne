
import {Routes, Route, Navigate} from 'react-router-dom'

import {App} from '../App'
import Tavsiye from './Tavsiye'
import Yeni from './Yeni'
import Imdb from './Imdb'




const AppRoutes = () => {


  return (
    <Routes>
      <Route element={<App />}>

      <Route path='filmler/yeni-eklenenler' element={<Yeni />} />
      <Route path='filmler/imdb' element={<Imdb />} />
      <Route path='filmler/tavsiye*' element={<Tavsiye />} />
     
      </Route>
    </Routes>
  )
}

export {AppRoutes}
