import React from 'react'
import { EditOutlined ,DeleteForever} from '@material-ui/icons'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function ShowToDoList(props) {
    const [data,setData]=[props.data,props.setData];
    const deleteTask=(Index)=>{
        console.log(Index)
        let newData=data.filter((ele,index)=>{
            return index!==Index;
        })
        setData(newData)
    }
    return (
        <div>{
            data.map((task,index)=>{
                console.log(index)
                return (
                <div style={{display:'flex',justifyContent:'flex-start', marginLeft:'10px',marginTop:'5px'}}>
                    {task.value}
                    <CheckCircleIcon size="small" onClick={()=>{deleteTask(index)}} style={{marginLeft:"5px"}} />
                </div>
                )
            })
        }
        </div>
    )
}

export default ShowToDoList
