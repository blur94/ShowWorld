import React, { useState } from 'react';
import SiteAdminMain from '../SiteAdminMain/SiteAdminMain';
import SiteAdminSidebar from '../SiteAdmin_SideBar/SiteAdminSidebar';
import './SiteAdmin.css';

export default function SiteAdmin() {
  const [mainView, setMainView] = useState('users');
  console.log(mainView);
  return (
    <div className='gil_sa_container'>
      <div className='gil_sa_sidebar'>
        <SiteAdminSidebar setMainView={setMainView} />
      </div>
      <div className='gil_sa_main'>
        <SiteAdminMain mainView={mainView} setMainView={setMainView} />
      </div>
    </div>
  );
}
