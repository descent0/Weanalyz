import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Userpp from './Components/User/UserApp';
import OperationTeamApp from './Components/OperationTeam/OperationTeamApp';
import TechnicalSupportApp from './Components/Technical Support/TechnicalSupportApp';
import AdminApp from './Components/Admin/AdminApp';
import Login from './Components/Auth/Signin';
import HelpdeskSignup from './Components/Auth/Signup';
import ForgotPass from './Components/Auth/ForgotPass';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<HelpdeskSignup />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/admin-dashboard" element={<AdminApp />} />
          <Route path="/operation-dashboard" element={<OperationTeamApp />} />
          <Route path="/technical-support-dashboard" element={<TechnicalSupportApp />} />
          <Route path="/user-dashboard" element={<Userpp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
