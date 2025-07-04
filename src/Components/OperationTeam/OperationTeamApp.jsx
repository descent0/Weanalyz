import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Header from '../utils/Header';
import Sidebar from './SideBar';
import Footer from '../utils/Footer';
import UserProfile from '../utils/UserProfile';
import ProfileSetting from '../utils/ProfileSetting';
import TicketApproval from './TicketApproval';
import MyTicket from './MyTicket';
import Performance from './Performance';


const OperationTeamApp = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'ticket-approval':
        return <TicketApproval />;
     case 'my-ticket':
        return <MyTicket/>
      case 'profile':
        return <UserProfile setActiveItem={setActiveItem}/>
        case'profile-setting':
        return <ProfileSetting/>
        case'performance':
        return <Performance/>
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

export default OperationTeamApp ;