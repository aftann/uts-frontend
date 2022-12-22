import React from "react";



    function App() {
  return (
    <div class="container-fluid py-4">
    <div class="container"><br/><a class="btn btn-info" href="/formpembayaran" role="button">New</a></div>
    <table class="table table-striped table-dark">
      <thead class="thead-white">
        
      <tr>
        
        <th scope="col"><font color = "#c4c3ca"/>Id</th>
        <th scope="col"><font color = "#c4c3ca"/>id Pengembalian</th>
        <th scope="col"><font color = "#c4c3ca"/>jumlah bayar</th>
        <th scope="col"><font color = "#c4c3ca"/>tanggal pembayaran</th>
      
        
        <th scope="col"><font color = "#c4c3ca"/>Action</th>
      </tr>
      </thead>
      
      <tbody>
        
        <tr>
      
              <td scope="col" align="center"></td>
              <td scope="col" align="center"></td>
              <td scope="col" align="center"></td>
              <td scope="col" align="center"></td>
              
              
              <td scope="col">
                <a class="btn3 btn-primary" role="button" href="/editbuku/" ><span>Edit</span></a>
                <a class="btn4 btn-danger" role="button" href="/delete/"><span>Delete</span></a>
              </td>
            </tr>
              </tbody>
              
    </table>
  </div>
  );
}

export default App;