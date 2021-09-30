import axios from 'axios';
import React, { useEffect, useState } from 'react'


const User = () => {
    const [user, setUser] = useState('');
    let id = window.location.search.split('=')[1];
    useEffect(() => {
        axios.get('http://192.168.2.195:9000/user/'+id).then((res) => {
            setUser(res.data);
            console.log(res.data);
        })
    }, [])
    return (

        <div class="card" style={{ 'width': '18rem' }}>
            <img width='100px' src={'http://192.168.2.195:9000/' + user.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Name : {user.name}</h5>
                <h6 class="card-title">Email : {user.email}</h6>
                {/* <div class ="card-body">
            <a href="#" class ="card-link">Card link</a>
            <a href="#" class ="card-link">Another link</a>
            </div> */}
            </div>
        </div>
    )
}

export default User
