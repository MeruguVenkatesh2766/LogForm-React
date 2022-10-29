import React,{useState} from "react";

function App() {

  const [data,setData]=useState({
    email:'',
    password:''
  })
  const{email,password}=data;
  const changeHandler =e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

const submitHandler = e=>{
  console.log("Successfully Added")
}
  
  return (
    <div className="main">
      <div className="log">
      <form onSubmit={submitHandler}>
        <div className="ma">
        <label>Email :</label> <br></br><br></br>
        <input type="text" name="email" placeholder="Enter Email" value={email} onChange={changeHandler}/><br></br><br></br>
        <span>Password :</span> <br></br><br></br>
        <input type="password" name="password" placeholder="Enter Password" value={password} onChange={changeHandler}/><br></br><br></br>
        <input type="submit" name="submit"/>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
