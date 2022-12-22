

import React from 'react';


function App() {
  return (
    <div className="min-height-75 bg-primary position-absolute w-100">
  <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
        <img src="/static/assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo"></img>
        <span className="ms-1 font-weight-bold">Perpustakaan</span>
      </a>
    </div>
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="./">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">List Buku</span>
          </a>
        </li>
        
      </ul>
      
    
  </aside>
  </div>
  );
}

export default App;
