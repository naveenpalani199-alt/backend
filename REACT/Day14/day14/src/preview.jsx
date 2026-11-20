import { createRoot } from 'react-dom/client'
import Task1 from './components/Task1.jsx'
import Task2 from './components/Task2.jsx'
import Task3 from './components/Task3.jsx'
import './index.css'

const tasks = new Map([
  ['1', Task1],
  ['2', Task2],
  ['3', Task3],
])
const Task = tasks.get(new URLSearchParams(window.location.search).get('task'))

createRoot(document.getElementById('root')).render(
  Task ? <main className="min-h-screen bg-gray-100 p-5"><Task /></main> : <p>Preview task not found.</p>,
)
