import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
  const navigate=useNavigate();
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""});
  const handleSubmit=async(e)=>{
    
    e.preventDefault();//synthatic event
    const response=await fetch("http://localhost:5000/api/createuser",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation
        })
    })
    const json=await response.json()
    console.log(json)
    if(!json.success){
      alert("Enter valid Credentials");
    }
    if(json.success){
    navigate("/login");
    }
  }
  const onChange=(e)=>{ 
          setCredentials({...credentials,[e.target.name]:e.target.value})
  } 
  return (
    <>
    <div className='container'>
<form onSubmit={handleSubmit}> 
<div className="mb-3">
    <label htmlFor="name" className="form-label">Username</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"name='email' value={credentials.email} onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' value={credentials.address} onChange={onChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Sign In</button>
  <Link to="/login" className='m13 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
  )
}
