import React,{Fragment,useState , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { EditTodo } from './EditTodo';

export const ListTodos = () => {

   const [todos,setTodos] = useState([]);

      // delete todo
      const deleteTodo = async (id) =>{
        try {

          const deletetodo = await fetch(`http://localhost:5000/todos/${id}`,{
            method:"DELETE"
          }  
          )
          

          // console.log(deletetodo);
          // for rerendering on screen
          toast.warn("Todo deleted Successfully");
         setTodos( todos.filter((todo)=> todo.todo_id !== id));
         
        
          
        } catch (error) {
          console.error(error.message);
        }
      }



    const getTodos = async()=>{
        try {

           const response = await fetch("http://localhost:5000/todos"); // by default it is get method
           const jsonData = await response.json();

          setTodos(jsonData);
            
        } catch (error) {
           console.error(error.message);
        }
    }

 useEffect(()=>{
    getTodos();
 },[]);

 console.log(todos);


  return <Fragment>
   
    <table className="table mt-5 text-center text-black ">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    
    {

      todos.map(todo=>(
        <tr key={todo.todo_id}>
          <td className='text-primary'>{todo.description}</td>
          <td><EditTodo todo={todo}/></td>
          <td><button className='btn btn-danger ' onClick={()=>{ deleteTodo(todo.todo_id)}}>Delete</button></td>
        </tr>
      ))
    }
      
    </tbody>
  </table>
 
  </Fragment>
}
