import { MostrarAlerta } from "./components/Alertas"
import {MostrarAvatar} from "./components/Avatar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MostrarAlerta
        altura = "50px"
        ancho = "autopx"
        colorFondo = "orange"
        
        texto = "Default Alert">
      </MostrarAlerta>
      <MostrarAlerta
        altura = "50px"
        ancho = "autopx"
        colorFondo = "yellow"
        text-aling = "center"
        texto = "Success Alert">
      </MostrarAlerta>
      <MostrarAvatar
       Imagen=""
       nombre="" apellido=""
       ></MostrarAvatar>
        
      
      </header>
    </div>
  );
}
export default App;

