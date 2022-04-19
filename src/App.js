import React, {Suspense} from 'react';
import './App.scss';
import {Route, Routes, Navigate} from 'react-router-dom';
import Terminals from './pages/Terminals/Terminals';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Transactions from './pages/Transactions/Transactions';
import Transaction from './pages/Transactions/Transaction';
import Disputes from './pages/Disputes/Disputes';
import AdminLogs from './pages/Logs/AdminLogs';
import Routing from './pages/Tech/Routing';
import Pricing from './pages/Tech/Pricing';
import Stations from './pages/Tech/Stations';
import Scheme from './pages/Tech/Scheme';

const PrivateRoute = ({ children}) => {
  // console.log(JSON.parse(localStorage.getItem('userDetails')))
  return localStorage.getItem('userDetails') ? children : <Navigate to="/login" />
    
}


function App() {
  return (
    <Suspense fallback="f">
    <Routes>   
    <Route path='/' exact element={ <PrivateRoute><Dashboard/> </PrivateRoute> }/>

    {/* Login */}

    <Route path='/login' exact element={<Login />} />
    <Route path='/forgot-password' exact element={<ForgotPassword />} />

    {/* Dashboard Management */}

    <Route path='/dashboard' exact element={ <PrivateRoute><Dashboard /> </PrivateRoute> } />

    {/* Manage Pos */}
      <Route path='/manage-pos' exact element={<PrivateRoute><Terminals /></PrivateRoute>} />

    {/* Transactions */}

    <Route path='/transactions' exact element={<PrivateRoute><Transactions /> </PrivateRoute>} />
    <Route path='/transaction/:id' exact element={<PrivateRoute><Transaction /> </PrivateRoute>} />

    {/* Disputes */}

    <Route path='/disputes' exact element={<PrivateRoute><Disputes /> </PrivateRoute>} />

    {/* Logs */}
    <Route path='/admin-logs' exact element={<PrivateRoute><AdminLogs /> </PrivateRoute>} />

    {/* Tech */}
    <Route path='/routing' exact element={<PrivateRoute><Routing /> </PrivateRoute>} />
    <Route path='/pricing' exact element={<PrivateRoute><Pricing /> </PrivateRoute>} />
    <Route path='/stations' exact element={<PrivateRoute><Stations /> </PrivateRoute>} />
    <Route path='/scheme' exact element={<PrivateRoute><Scheme /> </PrivateRoute>} />

    </Routes>
  </Suspense>
  );
}

export default App;
