

    

import React from 'react';


function App() {
    return (
      <div class="container-fluid py-4">
      <div class="container"><br/><a class="btn btn-info" href="/pinjam" role="button">New</a></div>
      <div class="container">
        <table class="table table-striped table-dark">
          <thead class="thead-white">
          <tr>
            <th scope="col"><font color = "#c4c3ca"/>No</th>
            <th scope="col"><font color = "#c4c3ca"/>Peminjam</th>
            <th scope="col"><font color = "#c4c3ca"/>Nama Buku</th>
            <th scope="col"><font color = "#c4c3ca"/>Tgl Pinjam</th>
            <th scope="col"><font color = "#c4c3ca"/>Tgl Kembali</th>
            <th scope="col"><font color = "#c4c3ca"/>Tgl di Kembalikan</th>

            
            
            <th scope="col"><font color = "#c4c3ca"/>Action</th>
          </tr>
          </thead>
          
          <tbody>
          <tr>
            <td scope="col" align="center"></td>
            <td scope="col" align="center"></td>
            <td scope="col" align="center"></td>
            <td scope="col" align="center"></td>
            <td scope="col" align="center"></td>
            <td scope="col" align="center"></td>
            <td scope="col">
              <a class="btn3 btn-primary" role="button" href="/kembalikan/<%= peminjaman[i].id %>" ><span>edit</span></a>
              <a class="btn4 btn-danger" role="button" href="/deletepeminjaman/<%= peminjaman[i].id %>" ><span>Delete</span></a>
            </td>
          </tr>
          </tbody>
          
        </table> 
    </div>
    </div>

    );
}

export default App;
