import './App.css'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <route path="/"  Element={<ItemListContainer />}/>
        <route path="/category/:categoryId"  Element={<ItemListContainer />}/>
        <route path="/item/:itemId" Element={<ItemDetailContainer />}/>
        <route path="*" Element={<h1>NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>

  
  )
}

export default App
