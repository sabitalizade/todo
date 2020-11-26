import React from 'react'

const LeftSide = ({note,setNote,handleDelete}) => {

const toggleTodo=(key)=>{
   setNote( note.map((todo,id)=>{
        if(id===key){
            todo.done=!todo.done
        }
        return todo
    }))
}

    return (
        <div className="noteList">
            <ul>
            {note.map((note,id)=>(
                <li className={note.done ? "marked" : null} key={id}>{note.title} 
                <div className="flex">
                <span className="mark" onClick={()=>toggleTodo(id)} >&#9745;</span> <button onClick={()=>handleDelete(id)} >delete</button>
                </div>
                
                </li>
            ))}
            </ul>
        </div>
    )
}

export default LeftSide
