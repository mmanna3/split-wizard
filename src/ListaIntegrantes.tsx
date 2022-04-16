import { useState } from 'react';
import './App.css';

function ListaIntegrantes() {
  const estilos = {
    contenedor: {
      margin: '1em',
      border: 'solid 1px black',
      borderRadius: '5px',
      padding: '2em',
    },
  };

  const [lista, setLista] = useState<string[]>([]);
  const [nuevoIntegrante, setNuevoIntegrante] = useState('');

  const agregarIntegrante = () => {
    setLista((listaAnterior) => [...listaAnterior, nuevoIntegrante]);
  };

  return (
    <div style={estilos.contenedor}>
      <div>
        {lista.map((integrante) => <div>{integrante}</div>)}
      </div>
      <div>
        <div style={{ marginTop: '1em', marginBottom: '1em' }}>
          <input type="text" value={nuevoIntegrante} onChange={(event) => setNuevoIntegrante(event.target.value)} placeholder="Nombre. Ej: Gandalf" />
          <button type="button" onClick={() => agregarIntegrante()}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default ListaIntegrantes;
