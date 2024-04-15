import Addworkoutplan from './pages/oneday/Addworkoutplan';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import TwodayWorkout from './pages/TwodayWorkout/TwodayWorkout';
import Threedayworkoutplan from './pages/Threedayworkout/Threedayworkoutplan';
import Workoutpage from './pages/Workoutpages/Workoutpage';  
import Trainerdiplay from './pages/Trainerprofile/Trainerpro';
import UpdateWorkout from './pages/UpdateWorkoutplan/Updateworkout';
import Report from './pages/TrainerReport/TrainersReport';
import Display from './pages/Trainerprofile/Trainerpro';
import oneUpdate from './pages/OnedayUpdate/OnedayUpdate';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/add' element={<Addworkoutplan/>}/>
      <Route path='/twoadd' element={<TwodayWorkout/>}/>
      <Route path='/threeadd' element={<Threedayworkoutplan/>}/>
      <Route path='/wpage' element={<Workoutpage/>}/>
      <Route path='/trainerdiplay' element={<Trainerdiplay/>}/>
      <Route path='/UpdateWorkout' element={<UpdateWorkout/>}/>
      <Route path='/Report' element={<Report/>}/>
      <Route path='/Trainers' element={<Display/>}/>
      <Route path='/update/:id' element={<oneUpdate/>}/>
    </Routes>
    </Router>
  );
}

export default App;
