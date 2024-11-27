import logo from './logo.svg';
import './App.css';
import First from './ES6/First';
import { AboutPage, MyButton, Board } from './components';

function App() {
  return (
    <div className="App">
    <First/>
   <MyButton/>
   <AboutPage/>
   <Board/>

    </div>
  );
}

export default App;
