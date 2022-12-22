import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Listanggota() {
    const [anggota, setAnggota] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3045/list')
            .then(res => {
                setAnggota(res.data);
            }).catch(err => {
                console.log(err);
            })
        },[])
    return (
        <div class="container-fluid py-4">
            <div class="container"><br /><a class="btn btn-info" href="/tambahanggota" role="button">New</a></div>
            <div class="container">
                <table class="table table-striped table-dark">
                    <thead class="thead-white">
                        <tr>
                            <th scope="col"><font color="#c4c3ca" />No</th>
                            <th scope="col"><font color="#c4c3ca" />Peminjam</th>
                            <th scope="col"><font color="#c4c3ca" />Alamat</th>
                            <th scope="col"><font color="#c4c3ca" />Tanggal Bergabung</th>
                            <th scope="col"><font color="#c4c3ca" />Action</th>
                        </tr>
                    </thead>

                    <tbody>
                    {anggota.map((u, index)=>(
                        <tr key={u.id}>
                            <td scope="col">{index + 1}</td>
                            <td scope="col">{u.name}</td>
                            <td scope="col">{u.alamat}</td>
                            <td scope="col">{u.tanggal_bergabung}</td>
                            <td scope="col">
                                <a class="btn3 btn-primary" role="button" href="/editanggota/<%= anggotas[i].id %>"><span>Edit</span></a>
                                <a class="btn4 btn-danger" role="button" href="/deleteanggota/<%= anggotas[i].id %>" ><span>Delete</span></a>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default Listanggota;
