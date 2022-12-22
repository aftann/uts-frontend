import React from 'react';

function App() {
    return (
        
        
        <div class="row content-center">
            <div class="col-sm-8">
                <form class="form-horizontal" method="POST" action="/tambah">
                    <input  type="hidden"/>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">Nama Buku: </label>
                            <div class="col-sm-10">
                                <input class="form-style" type="text" name="nama_buku" placeholder="Nama Buku" required/>
                            </div>
                    </div>
                    
        
                    <div class="form-group">
                        <label class="col-sm-4 control-label">Gambar: </label>
                            <div class="col-sm-10">
                                <input class="form-style" type="text" name="gambar" placeholder="link Gambar" required/>
                            </div>
                    </div>
        
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Author: </label>
                      <div class="col-sm-10">
                          <input class="form-style" type="text" name="author" placeholder="Author" required/>
                      </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Genre: </label>
                        <div class="col-sm-10">
                            <input class="form-style" type="text" name="genre" placeholder="Genre" required/>
                        </div>
                    </div>
        
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Jenis: </label>
                        <div class="col-sm-10">
                            <input class="form-style" type="text" name="jenis" placeholder="Jenis Buku" required/>
                        </div>
                    </div>
        
                    <div class="form-group">
                        <label class="col-sm-2 control-label">Harga Denda: </label>
                        <div class="col-sm-10">
                            <input class="form-style" type="number" name="denda"  placeholder="Harga Denda" required/>
                        </div>
                    </div>
        
                    <div class="form-group">
                        <br/>
                        <input class="btn btn-success" type="submit" value="Save"/>
                        <a class="btn btn-danger" href="/kelolab" role="button">Back</a>
                    </div>
                </form>
            </div>
        </div>
            
     
        
    );
}

export default App;
