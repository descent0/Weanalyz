import React, { act } from 'react';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import CustomToggleIcon from './../../assets/icons/CustomToggleIcon';
import BellIcon from '../../assets/icons/BellIcon';
import UserIcon from '../../assets/icons/UserIcon';
import { Link } from 'react-router';

const Header = ({ activeItem, setActiveItem }) => {
  console.log(activeItem);
  return (
    <header className="bg-[#55D6C2] text-white px-3 py-4 w-full flex justify-between items-center">
      <h1 className="text-3xl font-bold italic tracking-wider " style={{ fontFamily: "'Roboto', sans-serif" }}>Helpdesk</h1>
      <div className="flex items-center space-x-4">
        <div className=' cursor-pointer' onClick={()=>setActiveItem('')}>  <CustomToggleIcon/></div>
        <div className=' cursor-pointer' onClick={()=>setActiveItem('')} >       <BellIcon/></div>
        <div className=' cursor-pointer' onClick={()=>setActiveItem('profile')}>     <UserIcon/></div>
       <Link to={"/"}>  <div className=' cursor-pointer' onClick={()=>setActiveItem('')}>      <LogoutIcon/></div></Link>
  
  
      </div>
    </header>
  );
};

export default Header;