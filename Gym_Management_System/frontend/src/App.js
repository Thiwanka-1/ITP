import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewProPackage from './Pages/ViewProPackage/ViewProPackage';
import UpdatePackage from './Pages/UpdatePackage/UpdatePackage';
import UpdateProPackage from './Pages/UpdateProPackage/UpdateProPackage';

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
        <Route path="/" element={<ViewProPackage/>} />
        <Route path="/update/:id" element={<UpdateProPackage />} />
      </Routes>
    </Router>
  );
}

export default App; 