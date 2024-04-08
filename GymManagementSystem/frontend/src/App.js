import Addworkoutplan from './pages/oneday/Addworkoutplan';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import TwodayWorkout from './pages/TwodayWorkout/TwodayWorkout';
import Threedayworkoutplan from './pages/Threedayworkout/Threedayworkoutplan';
import Workoutpage from './pages/Workoutpages/Workoutpage';  
import Trainerdiplay from './pages/Trainerprofile/Trainerpro';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/add' element={<Addworkoutplan/>}/>
      <Route path='/twoadd' element={<TwodayWorkout/>}/>
      <Route path='/threeadd' element={<Threedayworkoutplan/>}/>
      <Route path='/wpage' element={<Workoutpage/>}/>
      <Route path='/trainerdiplay' element={<Trainerdiplay/>}/>
    </Routes>
    </Router>
  );
}

export default App;
