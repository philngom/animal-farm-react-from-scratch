import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { animals } from './data';

function App() {
  return (
    <div className="App">
      <Header className="App-header" greeting="Welcome to Animal Farm" />
      <Main animals={animals}/>
    </div>
  );
}

export default App;
