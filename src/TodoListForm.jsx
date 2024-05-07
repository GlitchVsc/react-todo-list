import { useState } from "react"

export default function TodoListForm( { onSubmit } ){
    
    const [newItem , setNewItem] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        
        if (newItem === "") return
        
        onSubmit(newItem)
        
        setNewItem("")       
      }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col  gap-1 border-2 rounded-xl h-60 justify-center">
            <div className="flex flex-col w-64">
            <label className="text-white text-lg" htmlFor="item-input">New Item</label>
            <input  
                id="item-input" className="bg-blue-300 rounded" type="text" 
                value={newItem}
                onChange={ e => setNewItem(e.target.value) }
            />
            </div>
            <button className="border rounded hover:bg-blue-300 hover:text-white w-64" type="submit" id="item">Add</button>
        </form>  
    )
}