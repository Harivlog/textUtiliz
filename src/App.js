
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import FormText from './components/FormText'
import Alert from './components/Alert';
// import About from './components/About'
let you = {
  name : "Haris",
  age : 21
}
function App() {
  const [Mode, setMode] = useState('dark')
  const [color, setColor] = useState('light')

  let toggleMode = ()=>{
    if(Mode == 'light'){
       setMode('dark')
       setColor('light')
    }
    else{
      setMode('light')
      setColor('dark')
    }
  }
  return (
    <div className="App">
        <Navbar title= {you.name} mode={Mode} appToggle={toggleMode} changeClr={color}/>
         <Alert />
         <div className='container'>
        <FormText heading="TextUtilize"/>
{/* <About /> */}
         </div>
    </div>
  );
}

export default App;
