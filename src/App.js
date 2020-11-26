import { useState } from 'react';
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
 const [note,setNote]=useState([])
const handleDelete=(todoId)=>{
setNote(
note.filter((todo,id)=>id!==todoId)
)

}
  return (
    <div className="App">
  <RightSide note={note} setNote={setNote}/>
  <LeftSide note={note}  setNote={setNote} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
