import React,{useState} from 'react';

const App = ()=>{

  const [name,setName] = useState();
  const [fullName, setfullname] = useState();

  const inputEvent=(e)=>{
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onSubmit=()=>{
    setfullname(name);
  };

  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder='Enter Your name'  onChange={inputEvent} value={name}/>
        <button onClick={onSubmit}>Click me</button>
      </div>
    </>
  );
};
export default App;