import React, {useState, useEffect} from 'react';
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
            <div class="row">

            {buku.map((u, index)=>(

                <div class="flex-container" key={u.id}>
               
                    <div class="flex-left content-center"> <p><img src="" alt="" height="145" width="110" /></p></div>
                    <div class="flex-center">
                        <p>Judul Buku:{u.nama_buku} </p>
                        <p>Id buku:{index + 1} </p>
                        <p>Genre:{u.genre} </p>
                        <p>Jenis Buku:{u.jenis} </p>

                    </div>
                 
                    <div class="flex-right content-center">

                    </div>
                </div>
            ))};
            </div>
        </div>

    );
}

export default Home;
