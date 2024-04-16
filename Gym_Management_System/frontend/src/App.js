
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import AddAppointment from "./pages/AddAppointment/AddAppointment";
import DisplayAppointment from "./pages/DisplayAppointment/DisplayAppointment";
import UpdateAppointment from "./pages/UpdateAppointment/UpdateAppointment";

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<AddAppointment />}/>
      <Route path='/display' element={<DisplayAppointment />}/>
      <Route path='/update/:id' element={<UpdateAppointment />}/>
    </Routes>
    </Router>
  );
  
}

export default App;
