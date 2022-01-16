import logo from './logo.svg';
import './App.css';
import Game from './game'
import Demo from './Demo'
import Random from './Random'
import Button from './button'

function App() {
  return (
    <div className="App">
     <Game name="game props"/>
     <Demo name="demo props"/>
     <Random maxNum={7}/>
     <Button />
    </div>
  );
}

export default App;
