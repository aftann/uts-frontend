import React from 'react';


function Tambahanggota() {
    return (
        
            <form class="form-horizontal" method="POST" action="/pinjam">
                <input type="hidden" />
                <div class="form-group">
                    <label class="col-sm-4 control-label">Nama Anggota: </label>
                    <div class="col-sm-10">
                        <select name="name" >

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
                    <label class="col-sm-2 control-label">Tanggal Peminjaman: </label>
                    <div class="col-sm-10">
                        <input class="form-style" type="date" name="tanggal_pinjam" placeholder="Jenis Buku" required />
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label">Tanggal kembali: </label>
                    <div class="col-sm-10">
                        <input class="form-style" type="date" name="tanggal_kembali" placeholder="Jenis Buku" required />
                    </div>
                </div>

                <div class="form-group">
                    <br />
                    <input class="btn btn-success" type="submit" value="Save" />
                    <a class="btn btn-danger" href="/kelolab" role="button">Back</a>
                </div>
            </form>
      





    );
}

export default Tambahanggota;
