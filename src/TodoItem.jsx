export function TodoItem( { id, completed , title, toggleTodo , deleteTodo  } ){

    return (
        <li className="flex gap-1">
            <div className="flex gap-2 ">
                <input
                 onChange={e => toggleTodo(id , e.target.checked )} 
                 type="checkbox" 
                 checked = {completed} 
                /> 
                {title}
                <label htmlFor=""> </label>
            </div>
            <button 
                onClick={ () => deleteTodo(id)} 
                className="text-red-400 bg-red-900">
                    Delete
            </button>
        </li>
    )
}