import React from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

const Home = () => {
  return (
    <div className='bg-gradient-to-r bg-gray-100 min-h-screen'>
        <InputTodo /> 
        <ListTodos />
    </div>
  )
}

export default Home