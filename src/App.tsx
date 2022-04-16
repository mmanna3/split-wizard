import { useState } from 'react';
import './App.css';

function App() {
  const [lista, setLista] = useState<string[]>([]);
  const [nuevoIntegrante, setNuevoIntegrante] = useState("");

  const agregarIntegrante = () => {
    setLista((listaAnterior) => [...listaAnterior, nuevoIntegrante])
  }

  return (
    <>
      <div>
        {lista.map((integrante) => <div>{integrante}</div>)}
      </div>
      <div>
        <div>
          <input type="text" value={nuevoIntegrante} onChange={(event) => setNuevoIntegrante(event.target.value)} placeholder='Nombre. Ej: Gandalf'></input>
          <button onClick={() => agregarIntegrante()}>Agregar</button>
        </div>
      </div>
    </>
  );
}

export default App;
