import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [Name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [id, setId] = useState(0);

  const [pessoas, setPessoas] = useState([]);

  const displayInfo = () => {
    console.log(Name, age);
  };

  const displayPessoa = () => {
    console.log(pessoas);
  };

  const addPessoa = () => {
    Axios.post("http://localhost:3001/create", {
      name: Name,
      age: age,
    }).then(() => {
      console.log("succeess");
    });
  };

  const getPessoas = () => {
    Axios.get("http://localhost:3001/pessoas").then((response) => {
      setPessoas(response.data);
    });
  };

  const deletePessoa = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      console.log("person deleted");
      getPessoas();
    });
  };
  return (
    <div className="App">
      <div className="Conteiner">
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <button className="botaoteste" onClick={addPessoa}>
          Enviar
        </button>

        <button onClick={getPessoas}>Mostrar Pessoas</button>
      </div>

      <div className="Pessoas">
        {pessoas &&
          pessoas.map((val, key) => {
            return (
              <div className="pessoa" key={val.id}>
                <button onClick={() => deletePessoa(val.id)}>Deletar</button>

                <div className="quadrado">
                  <h3>{val.Name}</h3>
                  <h3>{val.Age}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
