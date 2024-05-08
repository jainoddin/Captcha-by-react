import React,{useState} from 'react'
import { IoIosRefresh } from "react-icons/io";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const randomString=Math.random().toString(36).slice(8);
  const [captcha,setCaptcha]= useState(randomString)
  const [text,setText]=useState("");
  const [vaild,setVaild]=useState(false);

  const refreshString =()=>{
    setCaptcha(Math.random().toString(36).slice(8))
  }

  const matchCaptcha=(event)=>{
    event.preventDefault();
    if(text===captcha){
      setVaild(false)
      toast.success("SUSSESS")

    }else{
      setVaild(true)
      toast.error("Please enter vaild Captcha...!")
      setCaptcha(Math.random().toString(36).slice(8))

      
    }
  }

  return (
    <>
     <ToastContainer />
    <div><h1>validate Captcha</h1></div>
    <div className='captcha'>
      <h3>{captcha}</h3>
      <button className='b' style={{background:"none", border:"none"}} onClick={()=>refreshString()}><IoIosRefresh style={{color:"white"}} /></button></div>
      <form onSubmit={matchCaptcha}>
    <div class="input-container">
  <input type="text" id="name" name="name" onChange={(e)=>setText(e.target.value)} required/>
  <label for="name">Enter Captcha</label><br></br><br></br>
  <button type="submit" style={{ width: '10%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
</div>
</form>
    </>
  )
}

export default App
