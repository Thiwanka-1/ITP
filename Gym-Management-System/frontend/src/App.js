import './App.css';
import Header1 from './componenet/Header1';
import Addrequest from './pages/Addrequest/Addrequest';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Displayrequest from './pages/Displayrequest/displayrequest';
import Addtask from './pages/Addtask/Addtask';
import Updaterequest from './pages/Updaterequest/Updaterequest';
import Updatetask from './pages/Updatetask/Updatdetask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element ={<Displayrequest/>}/>
        <Route path= "/update/:id" element ={<Updaterequest/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;

