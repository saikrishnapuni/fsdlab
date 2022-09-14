import React from 'react'
import './App.css';
import Axios from 'axios'
function App() {

  const [name,setname] = React.useState("");
  const [tech,settech] = React.useState("");
  const [status,setstatus]= React.useState("");
  const submitReview=()=>
{
Axios.post('http://localhost:9000/aliens/add',
{name:name,
tech:tech,
sub:status}).then(()=>
{
alert("success");
})
.catch((err)=>{
  console.log(err)
})
};
  return (
    <div className='App'>
      <form >
        <input type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)} />
        <input type="tech" placeholder="tech" onChange={(e)=>settech(e.target.value)} />
        <input type="status" placeholder="status" onChange={(e)=>setstatus(e.target.value)} />
      </form>
      <button onClick={submitReview}><b>Submit</b></button>
    </div>
  );
}

export default App;
