import { useState } from "react";
import "./App.css";

interface Integrante {
  nombre: string;
  cuantoPuso: number;
}

function ListaIntegrantes() {
  const estilos = {
    contenedor: {
      margin: "1em",
      border: "solid 1px #333",
      borderRadius: "5px",
      padding: "2em",
    },
    input: {
      padding: "10px",
      border: "solid 1px #555",
    },
    boton: {
      border: "solid 1px #555",
      borderRadius: "5px",
      padding: "10px",
      marginLeft: "10px",
      // color: '#eee',
      backgroundColor: "#eda726",
    },
  };

  const [lista, setLista] = useState<Integrante[]>([]);
  const [nombre, setNombre] = useState("");
  const [cuantoPuso, setCuantoPuso] = useState(0);

  const agregarIntegrante = () => {
    setLista((listaAnterior) => [...listaAnterior, { nombre, cuantoPuso }]);
    setNombre("");
    setCuantoPuso(0);
  };

  return (
    <div style={estilos.contenedor}>
      <div>
        {lista.map((integrante) => (
          <div>
            <span style={{ marginRight: 10 }}>
              {integrante.nombre}
            </span>
            <span>
              {integrante.cuantoPuso}
            </span>
          </div>
        ))}
      </div>
      <div>
        <div style={{ marginTop: "1em", marginBottom: "1em" }}>
          <input
            style={estilos.input}
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            placeholder="Nombre. Ej: Gandalf"
          />
          <input
            style={estilos.input}
            type="number"
            value={cuantoPuso}
            onChange={(event) => setCuantoPuso(parseInt(event.target.value, 10))}
            placeholder="Cuánto puso. Ej: 236"
          />
          <button
            type="button"
            style={estilos.boton}
            onClick={() => agregarIntegrante()}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListaIntegrantes;
