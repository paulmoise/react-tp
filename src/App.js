import './App.css';
import CountComponent from './components/CountComponent'

function App() {
  return (
    <div className="App" style={{margin: "20px"}}>
      <CountComponent initialValue={10}/>
    </div>
  );
}

export default App;
