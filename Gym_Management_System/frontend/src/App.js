import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Component/Header/Header';


import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import AddAppointment from "./pages/AddAppointment/AddAppointment";
import DisplayAppointment from "./pages/DisplayAppointment/DisplayAppointment";
import UpdateAppointment from "./pages/UpdateAppointment/UpdateAppointment";



import ViewProPackage from './Pages/ViewProPackage/ViewProPackage';
import UpdatePackage from './Pages/UpdatePackage/UpdatePackage';
import UpdateProPackage from './Pages/UpdateProPackage/UpdateProPackage';
import ViewPackage from './Pages/viewPackage/ViewPackage';
import ViewOrders from './Pages/ViewOrders/ViewOrders';
import ViewProOrders from './Pages/ViewProOrders/ViewProOrders';
import SelectPackage from './Pages/SelectPackage/SelectPackage';
import UserProPackage from './Pages/UserProPackage/UserProPackage';
import AddProPackage from "./Pages/AddProPackage/AddProPackage";
import UserPackage from './Pages/UserPackage/UserPackage';
import AddPackage from "./Pages/AddPackage/AddPackage";


import Updaterequest from './Pages/Updaterequest/Updaterequest';
import Updatetask from './Pages/UpdateTask/UpdateTask';
import Addtask from "./Pages/Addtask/Addtask";
import Displaytask from "./Pages/Displaytask/Displaytask";
import Addrequest from "./Pages/Addrequest/Addrequest";
import Displayrequest from "./Pages/Displayrequest/displayrequest";

function App() {
  return (
     <Router>
      <Header/>
       <Routes>
        <Route path='/' element={<ViewProPackage/>} />
        <Route path='/view' element={<ViewPackage />} />
        <Route path='/updatepkg/:id' element={<UpdatePackage />} />
        <Route path='/add' element={<AddPackage />} />
        <Route path='/addpro' element={<AddProPackage />} />
        <Route path='/updatepropkg/:id' element={<UpdateProPackage />} />
        <Route path='/packages' element={<SelectPackage/>}/>
        <Route path='/promotion' element={<UserProPackage/>}/>
        <Route path='/standard' element={<UserPackage/>}/>
        <Route path='/order' element={<ViewOrders/>}/>
        <Route path='/proorder' element={<ViewProOrders/>}/>


        <Route path='/task' element={<Addtask />}/>
        <Route path='/viewtask' element={<Displaytask/>}/>
        <Route path='/updatetsk/:id' element={<Updatetask/>}/>
        <Route path='/req' element={<Addrequest />}/>
        <Route path='/viewreq' element={<Displayrequest />}/>
        <Route path='/updatereq/:id' element={<Updaterequest/>}/>
          
          
        <Route path='/addapoint' element={<AddAppointment />}/>
        <Route path='/display' element={<DisplayAppointment />}/>
        <Route path='/update/:id' element={<UpdateAppointment />}/>  
      </Routes>
     </Router>
  );
}

export default App; 
