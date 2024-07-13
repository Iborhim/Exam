import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Nav from './components/Nav/Nav'
import CardPage from './components/CardPage/CardPage'
import SinglePage from './components/SinglePage/SinglePage'


function App() {
  return (
    <>
      <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/single' element={<SinglePage/>}/>
          <Route path='/card' element={<CardPage/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App