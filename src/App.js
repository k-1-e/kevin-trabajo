import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          color="black" 
          fontColor="white"
          size="xl" 
        />
        <Button 
          color="orange" 
          fontColor="white"
          text="Delete"
        />
        <Button 
          color="coral" 
          fontColor="white"
        />
      </header>
    </div>
  );
}

export default App;