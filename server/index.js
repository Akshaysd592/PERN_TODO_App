const express = require("express");
const app = express();
const pool = require("./dbs") 
const cors = require("cors");
const port = 5000;

// middleware 
app.use(cors());
app.use(express.json()); // req.body


// Routes 

// create todo 
app.post("/todos", async (req,res)=>{
       try{

        //   console.log(req.body);
         const {description} = req.body;
         // database entry not using schema using pool which form db connection
         // and direct query

         const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ",[description]);
         // here ($1) is taking place of description 






          res.status(200).json(
         
             newTodo.rows[0] // returning first values in rows section which is description inserted

          )




       }catch(error){
         console.log(error.message);
       }
})

// get all todos
app.get("/todos",async(req,res)=>{
   try{
    const allTodos = await pool.query("SELECT * FROM todo");
     res.status(200).json(
        allTodos.rows
     );
   }catch(err){
    console.log(err.message);
   }
})



//get a todo
app.get("/todos/:id",async(req,res)=>{
    try {

    //   console.log(req.params);
     const {id} = req.params;
     const todo = await pool.query("SELECT * FROM todo WHERE todo_id =($1)",[id]);
        res.status(200).json(
            todo.rows[0]
        )
    } catch (error) {
       console.log(error.message);
    }
})







// update a todo
app.put("/todos/:id",async(req,res)=>{
    try {
        
        const {id} = req.params;
        const {description} = req.body;

        const updateTodo = await pool.query("UPDATE todo SET description = $1 where todo_id = $2",[description,id]);


          res.json("Todo is updated successfully")


    } catch (error) {
        console.log(error.message);
    }
})


//delete a todo
app.delete("/todos/:id",async(req,res)=>{
    try {
        
        const {id} = req.params;
     

        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id  = $1",[id]); // $1 is get replaced by id


          res.json("Todo is deleted successfully")


    } catch (error) {
        console.log(error.message);
    }
})





// server started
app.listen(port,()=>{
    console.log(`Server is started at port ${port}`);
});