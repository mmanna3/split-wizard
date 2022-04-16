import { useState } from 'react';
import './App.css';

function ListaIntegrantes() {
  const estilos = {
    contenedor: {
      margin: '1em',
      border: 'solid 1px #333',
      borderRadius: '5px',
      padding: '2em',
    },
    input: {
      padding: '10px',
      border: 'solid 1px #555',
    },
    boton: {
      border: 'solid 1px #555',
      borderRadius: '5px',
      padding: '10px',
      marginLeft: '10px',
      // color: '#eee',
      backgroundColor: '#eda726',
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
          <input style={estilos.input} type="text" value={nuevoIntegrante} onChange={(event) => setNuevoIntegrante(event.target.value)} placeholder="Nombre. Ej: Gandalf" />
          <button type="button" style={estilos.boton} onClick={() => agregarIntegrante()}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default ListaIntegrantes;
