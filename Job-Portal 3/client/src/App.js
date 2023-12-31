import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Login from './Pages/Login';
import UserRoute from './Components/UserRoute';
import Layout from './Pages/Global/Layout';
import userDashboard from './Pages/User/UserDashboard';
import UserJobsHistory from './Pages/User/UserJobsHistory';

// HOC - Higher order component
const UserDashboardHOC = Layout(userDashboard)
const UserJobsHistoryHOC = Layout(UserJobsHistory)

const App = () => {
  return (
    <>
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProSidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user/dashboard' element={<UserRoute> <UserDashboardHOC /> </UserRoute>} />
        <Route path='/user/jobs' element={<UserRoute> <UserJobsHistoryHOC /> </UserRoute>} />
        {/* <Route path='/user/dashboard' element={ < UserDashboard/> } /> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </ProSidebarProvider>
    </ThemeProvider>
    </>
  )
}

export default App