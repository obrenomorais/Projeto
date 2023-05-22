import './App.css';
import { useState } from "react"; 

function App() {

  const [Name, setName] = useState("");
  const [age, setAge] = useState(0);

  const displayInfo= () =>{
    console.log(Name, age)
  }


  return <div className="App">
    <div className='Conteiner'>
    <label>Name</label>
    <input type="text" 
    onChange={(event) => {
      setName(event.target.value);
      }}
      />
    <label>Age</label>
    <input type='number'
     onChange={(event) => {
      setAge(event.target.value);
      }}
      />
    <button onClick={displayInfo}>Enviar</button>
  </div>
  </div>

}

export default App;
