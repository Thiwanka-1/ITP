import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewProPackage from './Pages/ViewProPackage/ViewProPackage';
import UpdatePackage from './Pages/UpdatePackage/UpdatePackage';
import UpdateProPackage from './Pages/UpdateProPackage/UpdateProPackage';
import ViewPackage from './Pages/viewPackage/ViewPackage';
import ViewOrders from './Pages/ViewOrders/ViewOrders';
import ViewProOrders from './Pages/ViewProOrders/ViewProOrders';
import SelectPackage from './Pages/SelectPackage/SelectPackage';
import UserProPackage from './Pages/UserProPackage/UserProPackage';
import UserPackage from './Pages/UserPackage/UserPackage';
import Header from './Component/Header/Header';

function App() {
  return (
    //  <div>
    //    {/* <AddPackage/> */}
    //   {/* <AddProPackage/> */}
    //   {/* <UserPackage/> */}
    //    {/* <UserProPackage/> */}
    //   <ViewProOrders />
    //  </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ViewProPackage/>} />
    //     <Route path="/update/:id" element={<UpdateProPackage />} />
    //   </Routes>
    // </Router>

    <Router>
      <Header/>
      <Routes>
        <Route path='/packages' element={<SelectPackage/>}/>
        <Route path='/promotion' element={<UserProPackage/>}/>
        <Route path='/standard' element={<UserPackage/>}/>
      </Routes>
    </Router>

  );
}

export default App; 