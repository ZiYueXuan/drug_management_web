import { HashRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import ManagerNavMenu from './pages/manager/ManagerNavMenu';
import ResearcherNavMenu from './pages/researcher/ResearcherNavMenu'
import InspectorNavMenu from './pages/inspector/InspectorNavMenu'
import ControllerNavNemu from './pages/controller/ControllerNavMenu'
import Login from './pages/common/Login';
import NotFound from './pages/common/NotFound'
import Register from './pages/common/Register';
import './css/fullScreen.css'
import NotLogin from './pages/common/NotLogin';
function App() {
  return (
      <Router>
        <Routes>
          <Route index element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/notlogin' element={<NotLogin/>}/>
          <Route path='/manager/*' element={<ManagerNavMenu/>}/>
          <Route path='/researcher/*' element={<ResearcherNavMenu/>}/>
          <Route path='/inspector/*' element ={<InspectorNavMenu/>}/>
          <Route path='/controller/*' element={<ControllerNavNemu/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>

  );
}

export default App;
