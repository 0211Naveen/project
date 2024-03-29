import React,{useState} from 'react'
import axios from 'axios'


function App() {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password:"",
        number:""
        
      })

    function handleChange(evt) {
   
        setState({...state,[evt.target.name]: evt.target.value});
       
      }

      const handlesubmit=(e)=>
      {
        alert("submited successfully");
          e.preventDefault();
          console.log(state);
          axios.post('http://localhost:8081/signup',{state})
          .then(res=>console.log("registered Successfully"))
          .catch(err=>console.log(err));
      }


      return (
        <div className="position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded">
         
          <div className='text-center mb-3'>
            <h3>Mini Form</h3>  
          </div>

        <form onSubmit={e=>handlesubmit(e)}>

          <div className='mt-3'>
          <label className='form-label'> name </label> 
          <input className='float-end' type="text" name="name" value={state.name} onChange={handleChange} required/>
          </div>

          <div className='mt-3'>
          <label className='form-label'> email</label>
            <input className='float-end' type="text" name="email" value={state.email} onChange={handleChange} required/>   
          </div>

          <div className='mt-3'>
          <label className='form-label'> Password</label>
            <input className='float-end' type="text" name="password" value={state.password} onChange={handleChange} required/>
          </div>

          <div className='mt-3'>
            <label className='form-label' >phone</label>
            <input className='float-end' type='number' name='number' value={state.number}onChange={handleChange} required></input>
          </div>

          <div className='mt-4 justify-content-center '>
          <input type="submit"  className='btn btn-success'/>
          </div>
        </form>
        </div>
      );
}


export default App