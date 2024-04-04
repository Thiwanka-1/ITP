import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewPackage from './Pages/viewPackage/ViewPackage';
import UpdatePackage from './Pages/UpdatePackage/UpdatePackage';

function App() {
  return (
    // <div>
    //   {/* <AddPackage/> */}
    //   {/* <AddProPackage/> */}
    //   {/* <UserPackage/> */}
    //   {/* <UserProPackage/> */}
    //   <ViewPackage/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<ViewPackage/>} />
        <Route path="/update/:id" element={<UpdatePackage />} />
      </Routes>
    </Router>
  );
}

export default App; 