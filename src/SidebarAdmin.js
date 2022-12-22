



import React from 'react';


function App() {
  return (
    <div>
    <div className="min-height-75 bg-primary position-absolute w-100">
    <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
          <img src="" className="navbar-brand-img h-100" alt="main_logo"/>
          <span className="ms-1 font-weight-bold">Perpustakaan</span>
        </a>
    </div>
    <hr class="horizontal dark mt-0"/>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="./kelolab">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Kelola Buku</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/kelolap">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Laporan Peminjaman</span>
          </a>
        </li>
          <li className="nav-item">
            <a className="nav-link " href="./pinjam">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">Peminjaman Buku</span>
            </a>
          </li>
        <li className="nav-item">
          <a className="nav-link active" href="/kembalikan">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Pengembalian Buku</span>
          </a>
          <li className="nav-item">
            <a className="nav-link " href="./pembayaran">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">pembayaran</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="./list">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
              </div>
              <span className="nav-link-text ms-1">List Anggota</span>
            </a>
          </li> 
        </li>
        
      </ul>
      
  </aside>
  
  </div>
    </div>
  );
}

export default App;
