import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './App.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
function App() {
  const [values,setValues]=useState("");
  const [result,setResult]=useState([]);
  const HandleChange=(e)=>{
    setValues(e.target.value);
  }
  const addItem=(e)=>{
    e.preventDefault();
    setResult((oldData)=>{
      return ([...oldData,values]);
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
      <button onClick={addItem}><AddBoxIcon></AddBoxIcon></button>
      <ol>
        {
          result.map(res=>{
            return(<> 
            <li>{res}</li>
            
            </>)
          })
        }
      </ol>
      </div>
    </div>
    </>
  )
}

export default App;
