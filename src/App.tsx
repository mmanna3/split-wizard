import ListaIntegrantes from './ListaIntegrantes'
import './App.css';



function App() {
  const estilos = {
    contenedor: { marginLeft: "1em" }
  }

  return (
    <div style={estilos.contenedor}>
      <h1>Split Wizard</h1>
      <ListaIntegrantes />
    </div>
  );
}

export default App;
