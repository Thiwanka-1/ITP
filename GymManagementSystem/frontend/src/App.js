import Addworkoutplan from './pages/oneday/Addworkoutplan';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import TwodayWorkout from './pages/TwodayWorkout/TwodayWorkout';
import Threedayworkoutplan from './pages/Threedayworkout/Threedayworkoutplan';
import Workoutpage from './pages/Workoutpages/Workoutpage';  
import UpdateWorkout from './pages/UpdateWorkoutplan/Updateworkout';
import Report from './pages/TrainerReport/TrainersReport';
import Display from './pages/Trainerprofile/Trainerpro';
import OneUpdate from './pages/OnedayUpdate/OnedayUpdate';
import TwoUpdate from './pages/TwodayUpdate/TwodayUpdate';
import ThreeUpdate from './pages/ThreedayUpdate/ThreedayUpdate';
import TrainerRequest from './pages/TrainerRequest/TrainerRequest';
import SheduleRequest from './pages/SheduleRequest/SheduleRequest'; 

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/add' element={<Addworkoutplan/>}/>
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
