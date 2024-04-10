import './App.css';
import Header1 from './componenet/Header1';
import Addrequest from './pages/Addrequest/Addrequest';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Displayrequest from './pages/Displayrequest/displayrequest';
import Addtask from './pages/Addtask/Addtask';
import Displaytask from './pages/Displaytask/Displaytask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element ={<Displaytask/>}/>
        {/*<Route path= "/update/:id" element ={<Displayrequest/>}/>*/}
        
      </Routes>
    </Router>
    
  );
}

export default App;

