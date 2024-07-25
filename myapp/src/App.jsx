
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Blog from './components/Blog'
import Pokemon from './components/Pokemon'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/a' element={<StateBasics />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/greet' element={<Greet />}></Route>
        <Route path='/mapping' element={<Mapping />}></Route>
        <Route path='/api' element={<Api />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/pokemon' element={<Pokemon />}></Route>
      </Routes>
      
    </>
  )
}

export default App
