import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Counter from './components/Counter.jsx'
import ChangeText from './components/ChangeText.jsx'
import './index.css'

function Products() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </HashRouter>
  )
}

const tasks = new Map([
  ['products', Products],
  ['counter', Counter],
  ['change-text', ChangeText],
])
const Task = tasks.get(new URLSearchParams(window.location.search).get('task'))

createRoot(document.getElementById('root')).render(
  Task ? <Task /> : <p>Preview task not found.</p>,
)
