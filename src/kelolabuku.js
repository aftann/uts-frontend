import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {
  const [buku, setBuku] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3045/')
      .then(res => {
        setBuku(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div class="container-fluid py-4">
      <div class="container"><a class="btn btn-info" href="/tambah" role="button">New</a></div>
      <div class="container">
        <table class="table table-striped table-dark">
          <thead class="thead-white">
          <tr>

            <th scope="col"><font color="#c4c3ca" />Id Buku</th>
            <th scope="col"><font color="#c4c3ca" />Nama Buku</th>
            <th scope="col"><font color="#c4c3ca" />Author</th>
            <th scope="col"><font color="#c4c3ca" />Genre</th>
            <th scope="col"><font color="#c4c3ca" />Jenis</th>
            <th scope="col"><font color="#c4c3ca" />Denda</th>

            <th scope="col"><font color="#c4c3ca" />Action</th>
          </tr>

        </thead>
       
          <tbody>
          {buku.map((u, index) => (
            <tr key={u.id}>

              <td scope="col" align="center">{index+1}</td>
              <td scope="col" align="center">{u.nama_buku}</td>
              <td scope="col" align="center">{u.author}</td>
              <td scope="col" align="center">{u.genre}</td>
              <td scope="col" align="center">{u.jenis}</td>
              <td scope="col" align="center">{u.denda}</td>
              <td scope="col">
                <a class="btn3 btn-primary" role="button" href="/editbuku/<%= buku[i].id %>" ><span>Edit</span></a>
                <a class="btn4 btn-danger" role="button" href="/delete/<%= buku[i].id %>"><span>Delete</span></a>
              </td>
            </tr>
          ))};

          </tbody>
        
      </table>

    </div>
    </div >
    );
}

export default Home;
