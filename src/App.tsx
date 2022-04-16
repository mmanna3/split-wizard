import ListaIntegrantes from './ListaIntegrantes';
import './App.css';

function App() {
  const estilos = {
    contenedor: {
      height: '100%',
      position: 'absolute', // esto debería andar
      left: '0px',
      width: '100%',
      overflow: 'hidden',
      paddingLeft: '1em',
      background: 'linear-gradient(90deg, rgba(77,1,94,1) 0%, rgba(121,9,102,1) 21%, rgba(234,0,255,1) 70%)',
    },
    titulo: {
      color: '#eee',
      marginLeft: '1em',
    },
  };

  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>Split Wizard</h1>
      <ListaIntegrantes />
    </div>
  );
}

export default App;
