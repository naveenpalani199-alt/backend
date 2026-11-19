import { createRoot } from 'react-dom/client'
import Task1 from './components/Task1.jsx'
import Task2 from './components/Task2.jsx'
import Task3 from './components/Task3.jsx'
import Task4 from './components/Task4.jsx'
import Task5 from './components/Task5.jsx'
import Task6 from './components/Task6.jsx'
import Task7 from './components/Task7.jsx'
import Task8 from './components/Task8.jsx'
import Task9 from './components/Task9.jsx'
import Task10 from './components/Task10.jsx'
import './index.css'

const tasks = new Map([
  ['1', Task1],
  ['2', Task2],
  ['3', Task3],
  ['4', Task4],
  ['5', Task5],
  ['6', Task6],
  ['7', Task7],
  ['8', Task8],
  ['9', Task9],
  ['10', Task10],
])
const Task = tasks.get(new URLSearchParams(window.location.search).get('task'))

createRoot(document.getElementById('root')).render(
  Task ? <Task /> : <p>Preview task not found.</p>,
)
