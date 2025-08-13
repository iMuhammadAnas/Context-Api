import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/home'
import AddNewSite from './pages/addNewSite'
import Counter from './components/Counter'

function App() {
  return (
    <Counter />
  )
}

export default App