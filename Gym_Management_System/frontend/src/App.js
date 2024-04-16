import Addworkoutplan from './Pages/oneday/Addworkoutplan';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
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

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Addworkoutplan/>}/>
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
    </Routes>
    </Router>
  );
}

export default App;
