import React,{Fragment} from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { ListTodos } from './components/ListTodos';
import { ToastContainer } from 'react-toastify';
// import ListTodos from './components/ListTodos';
function App() {
  return  <div className='background '>
    <div className='container '>
    <InputTodo/>
    <ListTodos/>
    </div>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>

}

export default App;
