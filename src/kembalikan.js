import React from 'react';


function App() {
    return (
        <div class="container-fluid py-4">
            <form class="form-horizontal" method="POST" action="/kembalikan/<%= peminjaman.id %>">
                <input type="hidden" />
                <div class="form-group">
                    <label class="col-sm-4 control-label">Nama Anggota: </label>
                    <div class="col-sm-10">
                        <select name="name" value="<%= peminjaman.name %>">

                            <option value="<%= anggota[i].id %>" class="form-style" ></option>

                        </select>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-sm-4 control-label">Nama Buku: </label>
                    <div class="col-sm-10">
                        <select name="name_buku" >

                            <option value="<%=buku[i].id%>" class="form-style" ></option>

                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Tanggal dikembalikan: </label>
                    <div class="col-sm-10">
                        <input class="form-style" type="date" name="tanggal_dikembalikan" placeholder="Jenis Buku" required/>
                    </div>
                </div>





                <div class="form-group">
                    <br/>
                        <input class="btn btn-success" type="submit" value="Save"/>
                            <a class="btn btn-danger" href="/kembalikan" role="button">Back</a>
                </div>
                     
                    </form>
                </div>

    );
}

export default App;
