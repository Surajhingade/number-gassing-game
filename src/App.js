import './App.css';
import Home from './components/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserInfo from './components/UserInfo';
// import StartGame from './components/StartGame';
import Buttons from './components/Buttons';
// import Startgame from '../components/StartGame';
import Startgame from '../src/components/Startgame';
 

function App() {
  return (
    <div className="App">
   
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/user' element={<UserInfo />} />
{/* <Route path='/start' element={<StartGame />} /> */}
<Route path='/button' element={<Buttons />} />
{/* <Route path='/suraj' element={</>} /> */}
<Route path='/startgame' element={<Startgame />} />
</Routes>  
</BrowserRouter>
  
      
    </div>
  );
}

export default App;





{/* <StartGame /> */}