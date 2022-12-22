import Sidebar from './Sidebar';
import SidebarAdmin from './SidebarAdmin';
import Navbar from './Navbar';
import Home from './home';
import Login from './login';
import Register from './register';
import Pembayaran from './pembayaran';
import Kelolabuku from './kelolabuku';
import Kelolapeminjaman from './kelolapeminjaman';
import Listanggota from './listanggota';
import Pinjam from './pinjam';
import Kembalikan from './kembalikan';
import Tambahbuku from './tambahbuku';



import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <div>
          <Sidebar/>
          <Navbar/>
          <Home/>
        </div>
      }/>

<Route path='/home' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          
        </div>
      }/>

<Route path='/login' element={
        <div>
          <Login/>
          
        </div>
      }/>

<Route path='/register' element={
        <div>
          <Register/>
          
        </div>
      }/>

<Route path='/pembayaran' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Pembayaran/>
          
        </div>
      }/>

<Route path='/kelolab' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Kelolabuku/>
          
        </div>
      }/>

<Route path='/kelolap' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Kelolapeminjaman/>
          
        </div>
      }/>

<Route path='/list' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Listanggota/>
          
        </div>
      }/>

<Route path='/pinjam' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Pinjam/>
          
        </div>
      }/>

<Route path='/kembalikan' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Kembalikan/>
          
        </div>
      }/>

<Route path='/tambah' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Tambahbuku/>
          
        </div>
      }/>

<Route path='/tambah' element={
        <div>
          <SidebarAdmin/>
          <Navbar/>
          <Tambahbuku/>
          
        </div>
      }/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
