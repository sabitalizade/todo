import React, { useState } from 'react'

const RightSide = ({setNote,note}) => {
    const [value, setvalue] = useState('')

    const handleChange= e =>{
    setvalue(e.target.value);
    
    }

    const handleSave = ()=>{
        
        if(value===''){
            alert("Can`t save empty note")
        }else if(note.find(todo=>todo.title===value)){
            alert("This note exist")
        }
        else{
            const todoItem={
                title:value,
                done:false
            }
            setNote([...note,todoItem]);
            setvalue('')
        }}



        // const handleKeypress = event => {
  
        //   if (event.keyCode === 13) {
        //     handleSave();
        //   }
        // };

    return (
        <div className="writingArea">
        <form onSubmit={e=>e.preventDefault()}>
        
            <input   className="inputTitle"  type="text" placeholder="Your todos" 
            value={value}
             onChange={handleChange}
            //  onKeyPress={handleKeypress}
            />            
            <button 
             className="submitButton"
             onClick={handleSave}
             >Save</button>
        </form>
        </div>
    )
}

export default RightSide
