import { MostrarAlerta } from "./components/Alertas"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MostrarAlerta
        altura = "30px"
        ancho = "autopx"
        colorFondo = "green"
        texto = "Default Alert">
      </MostrarAlerta>
      <MostrarAlerta
        altura = "30px"
        ancho = "autopx"
        colorFondo = "red"
        texto = "Success Alert">
      </MostrarAlerta>
      
      </header>
    </div>
  );
}
export default App;