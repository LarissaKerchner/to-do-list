import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'

function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/todo' element={<TodoList />}/>
        <Route path='/todo/add' element={<AddTodo />}/>
        <Route path='*' element={<Navigate to='/' />}/>
     </Routes>
    </>
  )
}

export default App
