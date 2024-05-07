import { useEffect, useState } from "react"
import TodoListForm from "./TodoListForm"
import { TodoList } from "./TodoList"

export default function App() {

  // const [newItem , setNewItem] = useState("")
  const [todos, setTodos ] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if ( localValue == null) return []
    
    return JSON.parse(localValue)
  })


  useEffect( () => {
    localStorage.setItem("ITEMS" , JSON.stringify(todos))
  } , [todos])


  function newTodo(title){
     setTodos( currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title, 
          completed: false 
        },
      ]
    })
  }



  function toggleTodo(id , completed){
    setTodos( currentTodos => {
       return  currentTodos.map( todo =>{
          if ( todo.id === id ){
            return {...todo , completed}
          }

          return todo 
        })
    })
  }

  function deleteTodo(id){
    setTodos( currentTodos => {
      return currentTodos.filter( todo => todo.id !== id )
    })
  }
  
  return (
    <>
      <div className="flex gap-2  justify-center items-center h-screen">
        <TodoListForm onSubmit ={newTodo} />
        <div className="border rounded-xl basis-1/4  flex flex-col h-60 p-4">
          <h1 className="flex justify-start font-bold text-3xl ">
            Todo List
          </h1>
          <TodoList todos = { todos } toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </div>

    </>
  )
}
