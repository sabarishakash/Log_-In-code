import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import { delete_url, geturl, post_url, update_url } from './Url/Url';
function App() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
const [data,setData]=useState([])
const[ref,setRef]=useState(true)
const Post_data=async()=>{
  await axios.post(post_url,{
    email,
    password

  })
}
const del=(v)=>{
  axios.delete(`${delete_url}/${v._id}`).then(()=>{
    setRef(!ref)
  })
}
const edit=(v)=>{
  setEmail(v.email)
  setPassword(v.password)
}
useEffect(()=>{
  axios.get(geturl).then((res)=>{
    setData(res.data)
  })
})
const update=async(v)=>{
  await axios.put(`${update_url}/${v._id}`,{
    email,
    password

  }).then(()=>{
    setEmail("")
    setPassword("")
  }).catch((err)=>{
    console.log("Error");
  })
}
  return (
   <>
<div>
  <form>
    <label>Email:</label>
    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label>password:</label>
    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </form>
  <button onClick={Post_data}>Click</button>
  <div>{data.map((v)=>(
    <p>
      {v.email} {v.password}
       <button onClick={()=>edit(v)}>edit</button>
    <button onClick={()=>del(v)}>delete</button>
    <button onClick={()=>update(v)}>update</button>
    </p>
   

  ))}</div>
  
 
</div>
   </>
  );
}

export default App;
