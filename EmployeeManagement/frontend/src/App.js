import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Header from './Component/Header/Header';
import DashBoard from "./Pages/DashBoard/DashBoard";
import UserDash from "./Pages/UserDash/UserDash";




import AddAppointment from "./Pages/AddAppointment/AddAppointment";
import DisplayAppointment from "./Pages/DisplayAppointment/DisplayAppointment";
import UpdateAppointment from "./Pages/UpdateAppointment/UpdateAppointment";



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




import Addworkoutplan from './Pages/oneday/Addworkoutplan';
import TwodayWorkout from './Pages/TwodayWorkout/TwodayWorkout';
import Threedayworkoutplan from './Pages/Threedayworkout/Threedayworkoutplan';
import Workoutpage from './Pages/Workoutpages/Workoutpage';  
import UpdateWorkout from './Pages/UpdateWorkoutplan/Updateworkout';
import Report from './Pages/TrainerReport/TrainersReport';
import Display from './Pages/Trainerprofile/Trainerpro';
import OneUpdate from './Pages/OnedayUpdate/OnedayUpdate';
import TwoUpdate from './Pages/TwodayUpdate/TwodayUpdate';
import ThreeUpdate from './Pages/ThreedayUpdate/ThreedayUpdate';
import TrainerRequest from './Pages/TrainerRequest/TrainerRequest';
import SheduleRequest from './Pages/SheduleRequest/SheduleRequest'; 


import AddSchedule from './Pages/AddSchedule/AddSchedule';
import DisplayRequest from './Pages/DisplaySchedule/DisplaySchedule';
import UpdateRequest from './Pages/UpdateSchedule/UpdateSchedule';
import AddEmployee from "./Pages/AddEmployee/AddEmployee";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";



import { AuthProvider } from './Auth/AuthContext'
import PaymentPage from "./Pages/Payment/Payment";
import PaymentsPage from "./Pages/ViewPayment/ViewPayment";
import EmployeeList from "./Pages/ViewEmployee/ViewEmployee";
import UpdateEmployee from "./Pages/UpdateEmployee/UpdateEmployee";
// import ProtectedRoute from './Auth/ProtectedRoute';


function App() {
  return (
    <Router>
    <AuthProvider>
      <Header/>
       <Routes>

       <Route path='/' element={<Home />} />
       <Route path='/contact' element={<ContactUs />} />
       <Route path='/about' element={<AboutUs />} />

       <Route
          path="/payment/:packageId/:packageType"
          element={<PaymentPage />}
        />
        <Route path='/viewpay' element={<PaymentsPage />}/>

        <Route path="/addemp" element={<AddEmployee />} />




       <Route path='/dash' element={<DashBoard />} />
       <Route path='/user' element={<UserDash />} />

        <Route path='/viewpro' element={<ViewProPackage/>} />
        <Route path='/viewpkg' element={<ViewPackage />} />
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
        <Route path='/appoint' element={<DisplayAppointment />}/>
        <Route path='/updateapoint/:id' element={<UpdateAppointment />}/> 
          
          
       <Route path='/addworkout' element={<Addworkoutplan/>}/>
       <Route path='/twoadd' element={<TwodayWorkout/>}/>
       <Route path='/threeadd' element={<Threedayworkoutplan/>}/>
       <Route path='/wpage' element={<Workoutpage/>}/>
       <Route path='/UpdateWorkout' element={<UpdateWorkout/>}/>
       <Route path='/Report' element={<Report/>}/>
       <Route path='/Trainers' element={<Display/>}/>
       <Route path='/update/oneday/:id' element={<OneUpdate/>}/>
       <Route path='/update/twoday/:id' element={<TwoUpdate/>}/>
       <Route path='/update/threeday/:id' element={<ThreeUpdate/>}/>
       <Route path='/TrainerRequest' element={<TrainerRequest/>}/>
       <Route path='/Shedule' element={<SheduleRequest/>}/> 
         
         
       <Route path='/addSchedule' element={<AddSchedule/>}/>
       <Route path='/scheduledisplay' element={<DisplayRequest/>}/>
       <Route path='/updatesc/:id' element={<UpdateRequest/>}/>  

       <Route path='/login' element={<Login />}/>
       <Route path='/signup' element={<SignUp />}/>

       <Route path='/viewemp' element={<EmployeeList />}/>
       <Route path='/updateemp/:id' element={<UpdateEmployee />}/>




      </Routes>
     
     </AuthProvider>
     </Router>
  );
}

export default App; 
