import { useState } from "react";
import "./App.css";
import { calcular, Deudor, IntegranteDelGrupo } from "./Logica";

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

  const [lista, setLista] = useState<IntegranteDelGrupo[]>([]);
  const [nombre, setNombre] = useState("");
  const [plataQuePuso, setPlataQuePuso] = useState(0);
  const [deudores, setDeudores] = useState<Deudor[]>([]);

  const agregarIntegrante = () => {
    setLista((listaAnterior) => [...listaAnterior, { nombre, plataQuePuso }]);
    setNombre("");
    setPlataQuePuso(0);
  };

  const calcularLaRepartija = () => {
    setDeudores(calcular(lista));
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
              {integrante.plataQuePuso}
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
            value={plataQuePuso}
            onChange={(event) => setPlataQuePuso(parseInt(event.target.value, 10))}
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
        <button
          type="button"
          style={estilos.boton}
          onClick={() => calcularLaRepartija()}
        >
          Hacer la repartija
        </button>
        <div>
          {deudores.map((deudor) => (
            <div>
              {deudor.aQuienesLeDebe.map((acreedor) => (
                <div>{`${deudor.nombre} le debe a ${acreedor.nombre} $${acreedor.cuantoTieneQueCobrar}`}</div>))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaIntegrantes;
