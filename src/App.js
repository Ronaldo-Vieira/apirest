import React, { useEffect, useState } from 'react';
import api from "./api"
import './App.css';

function App() {
  const [dados, setDados] = useState();
  useEffect(() => {
    api.get("ronaldo-vieira").then((response) => {
      setDados(response.data)
    })
  })
  return (
    <div className="App">
      <h1>Informações do meu perfil do github:</h1>
      <br />
      <p>
        Login: {dados?.login}
        <br />
        Id: {dados?.id}
        <br />
        Url: {dados?.url}
        <br />
        Name: {dados?.name}
      </p>
    </div>
  );
}

export default App;
