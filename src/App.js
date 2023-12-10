
import './App.css';

function App() {

  function handleLink(msg){
    alert(msg)
  }
  return (
    <div className="App">
      <a href="#/" onClick={()=>handleLink("Hello world")}>Click me</a>
    </div>
  );
}

export default App;
