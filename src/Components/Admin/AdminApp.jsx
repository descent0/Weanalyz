import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Header from '../utils/Header';
import Sidebar from './SideBar';
import Footer from '../utils/Footer';
import UserProfile from '../utils/UserProfile';
import ProfileSetting from '../utils/ProfileSetting';
import Database from './Database';
import Setting from './Setting';
import UserLogHistory from './UserLogHistory';


const AdminApp = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'database':
        return <Database />;
     case 'setting':
        return <Setting/>
      case 'profile':
        return <UserProfile setActiveItem={setActiveItem}/>
        case'profile-setting':
        return <ProfileSetting/>
        case'user-log-history':
        return <UserLogHistory/>
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header activeItem={activeItem} setActiveItem={setActiveItem}/>
      <div className="flex flex-1">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className='flex flex-col w-full'>
        <main className="flex-1">
          {renderContent()}
        </main>
         <Footer />
         </div>
      </div>
    </div>
  );
};

export default AdminApp ;