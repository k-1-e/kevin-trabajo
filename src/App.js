import { MostrarAlerta } from "./components/Alertas"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MostrarAlerta
        altura = "20px"
        ancho = "autopx"
        colorFondo = "green"
        texto = "hola2">
      </MostrarAlerta>
      <MostrarAlerta
        altura = "20px"
        ancho = "autopx"
        colorFondo = "red"
        texto = "hola">
      </MostrarAlerta>
      
      </header>
    </div>
  );
}
export default App;