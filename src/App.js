import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VolunteerLogin from './webpages/VolunteerLogin';
import VolunteerRegistration from './webpages/VolunteerRegistration';
import VolunteerDashboard from './webpages/VolunteerDashboard';
import AdminLogin from './webpages/AdminLogin';
import AdminRegistration from './webpages/AdminRegistration';
import Events from './webpages/Events';
import AddEvent from './webpages/AddEvent';
import EventDetails from './webpages/EventDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<VolunteerLogin />}/>
        <Route path='/volregister' element={<VolunteerRegistration />}/>
        <Route path='/volhome' element={<VolunteerDashboard />}/>
        <Route path='/adminregister' element={<AdminRegistration />}/>
        <Route path='/adminlogin' element={<AdminLogin />}/>
        <Route path='/allevents' element={<Events />}/>
        <Route path='/addevent' element={<AddEvent />}/>
        <Route path='/eventdetail' element={<EventDetails />}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
