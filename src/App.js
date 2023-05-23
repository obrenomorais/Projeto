import './App.css';
import { useState } from "react"; 
import Axios from 'axios';

function App() {

  const [Name, setName] = useState("");
  const [age, setAge] = useState(0);

  const displayInfo= () =>{
    console.log(Name, age)
  }

  const addPessoa = () =>{
    Axios.post('http://localhost:3001/create', {
      name: Name, 
      age: age
    }).then(() => {
    console.log("succeess");
  });
  };

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
    <button onClick={addPessoa}>Enviar</button>
  </div>
  </div>

}

export default App;
