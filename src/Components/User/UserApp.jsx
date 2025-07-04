import React, { useState } from 'react';
import Dashboard from './Dashboard';
import NewTicket from './NewTicket';
import MyTickets from './MyTicket';
import Header from '../utils/Header';
import Sidebar from '../utils/SideBar';
import Footer from '../utils/Footer';
import UserProfile from '../utils/UserProfile';
import ProfileSetting from '../utils/ProfileSetting';


const Userpp = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-ticket':
        return <NewTicket />;
      case 'my-ticket':
        return <MyTickets />;
      case 'profile':
        return <UserProfile setActiveItem={setActiveItem}/>
        case'profile-setting':
        return <ProfileSetting/>
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

export default Userpp;