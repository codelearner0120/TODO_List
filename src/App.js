import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './App.css';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ShowToDoList from './ShowToDoList';
function App() {
  const [values,setValues]=useState("");
  const [result,setResult]=useState([]);
  const HandleChange=(e)=>{
    setValues(e.target.value);
  }
  const addItem=(e)=>{
    e.preventDefault();
    if(values===""){
      alert("please add a task");
      return;
    }
    setResult((oldData)=>{
      return ([...oldData,{
        done:false,
        value:values
      }]);
    })
   setValues("");
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="add Items" value={values} onChange={HandleChange}/>
      <button onClick={addItem}><AddTaskIcon size="small" /></button>
      <ShowToDoList data={result} setData={setResult} />
      </div>
    </div>
    </>
  )
}

export default App;
