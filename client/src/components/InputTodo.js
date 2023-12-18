import React,{Fragment ,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const InputTodo = () => {
     const [description , setDescription] = useState("");
   
   const onSubmitForm = async(e)=>{
    e.preventDefault();
    
    try {
        const body = {description};
      
         await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{
            "Content-Type":"application/json"
                },
                body: JSON.stringify(body)
            });
            // setDescription("");
          
        
            window.location = '/' ;
    } catch (error) {
        console.error(error.message);
    }
   }

  return <Fragment> 
   <h1 className='text-center pt-5 '>PERN Todo List </h1>
   <form className='d-flex mt-5 ' onSubmit={onSubmitForm}>
    <input type='text' required className='form-control  ' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
    <button className='btn btn-success ml-1' >Add</button>

   </form>

  </Fragment>
}
