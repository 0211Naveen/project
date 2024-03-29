import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './index.css';
import {Link,useNavigate,useParams} from 'react-router-dom' 




//display node to frontend

function Display() {
    const navigate=useNavigate();
  
     
    const [data,setData]=useState([])
    useEffect(()=>{
  
      axios.get('http://localhost:8081/display2')
      .then(res=>setData(res.data))
      .catch(err=>console.log(err));
    },[])

      //delete the records through the delete button

  const hdelete=(email)=>
  {
    const confirm=window.confirm("Would you like to Delete?"+email);
    if(confirm)
    {
      axios.delete('http://localhost:8081/del/'+email)
      .then(res=>{navigate(0)})
      .catch(err=>console.log(err));


   }
  }

    //get values to the models

    const hget=(email)=>
    {
    
      axios.get('http://localhost:8081/update/'+email)
      .then(res=> newChange(res.data[0]))
      .catch(err=>console.log(err));
     
    }


    const [newvalue,newChange]= useState({
      name: "",
      email: "",
      password:"",
      number:""
      
    })

        // update records

function uhandlechange(evt)
{
  newChange({...newvalue,[evt.target.name]:evt.target.value});
}
const hsubmit=(e3)=>{

  e3.preventDefault();
  console.log(newvalue);
  axios.put('http://localhost:8081/up/',{newvalue})
  .then(res=>alert("updated successfully"))
  .then(res=>{navigate(0)})
  .catch(err=>console.log(err));
}



    return (
        <>
                <table className='table table-stripped table-primary'><tr><th>Name</th><th>Email</th><th>Password</th><th>Number</th><th>Changes</th>
       
       </tr>
       {data.map((x,index)=>{


         return <tr key={index}>
           <td>{x.name}</td>
           <td>{x.email}</td>
           <td>{x.password}</td>
           <td>{x.number}</td>
           <td><button id='del' className='text-black btn me-3'   onClick={e=> hdelete(x.email)} >delete</button>
           <button id='edi' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e2=>hget(x.email)}> Edit </button>
           </td>

   
         </tr>
       })}
      
       </table>
       



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <form onSubmit={(e3)=>hsubmit(e3)} >
      <div class="modal-body">
      

<div className='mt-3'>
<input className='float-end' type="text" name="name" placeholder='name' value={newvalue.name} onChange={uhandlechange}/>
</div><br></br>

<div className='mt-3'>
  <input className='float-end' type="text" name="email" placeholder='email'  value={newvalue.email} onChange={uhandlechange} readOnly/>   
</div><br></br>

<div className='mt-3'>
  <input className='float-end' type="text" name="password" placeholder='password'  value={newvalue.password} onChange={uhandlechange}/>
</div><br></br>

<div className='mt-3'>
  <input className='float-end' type='number' name='number' placeholder='phone number'  value={newvalue.number} onChange={uhandlechange}></input>
</div>

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
      </form>

    </div>
  </div>
</div>
        
        </>
      )
}
export default Display