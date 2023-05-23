import './App.css';
import { useState } from "react"; 
import Axios from 'axios';

function App() {

  const [Name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [pessoas, setPessoas] = useState([]);



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


  const getPessoas = () =>{
Axios.get('http://localhost:3001/pessoas'). then ( (response => {
  console.log(response)
})

    
  )}

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

      <div className='Pessoas'> 
      <button onClick={getPessoas}>Mostrar Pessoas</button> 
      
      </div>
  </div>

}

export default App;
