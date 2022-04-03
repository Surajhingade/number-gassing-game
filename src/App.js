import './App.css';
import Home from './components/Home';
 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserInfo from './components/UserInfo';
 
import Buttons from './components/Buttons';
 
import Startgame from '../src/components/Startgame';
 

function App() {
  return (
    <div className="App">
   
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/user' element={<UserInfo />} />
 
<Route path='/button' element={<Buttons />} />
 
<Route path='/startgame' element={<Startgame />} />
</Routes>  
</BrowserRouter>
  
      
    </div>
  );
}

export default App;





{/* <StartGame /> */}