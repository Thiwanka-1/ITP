import Addworkoutplan from './pages/oneday/Addworkoutplan';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import TwodayWorkout from './pages/TwodayWorkout/TwodayWorkout';
import Threedayworkoutplan from './pages/Threedayworkout/Threedayworkoutplan';
import Workoutpage from './pages/Workoutpages/Workoutpage';  
import Trainerdiplay from './pages/Trainerprofile/Trainerpro';
import UpdateWorkout from './pages/UpdateWorkoutplan/Updateworkout';
import Update from './pages/UpdateWorkoutplan/updateordelete';

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
      <Route path='/Update' element={<Update/>}/>
    </Routes>
    </Router>
  );
}

export default App;
