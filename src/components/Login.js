import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    function handleRegister() {
        if (password) {
            let registerUser = {
                email: email,
                password: password,
            }
            axios.post('http://192.168.2.195:9000/login',registerUser).then((res) => {
                if(res.status === 200){
                    console.log(res.data._id);
                    alert('login successfully....')

                    window.location.href='/user?id='+res.data._id;
                }
            })
        } else {
            console.log('Password Does\'nt Matched');
        }
    }


    return (
        <div className='mx-auto' style={{ 'width': '40%' }}>
            <h2 >User's Log In</h2>
            <form className='mx-auto row g-3 w-75'>
                <div className='col-12 '>
                    <label className="form-label" for='email' >Enter Your Email </label>
                    <br />
                    <input name='email' className='form-control-lg w-100' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='col-12'>
                    <label className="form-label" for='pwd'>Enter Your Password</label>
                    <br />
                    <input name='pwd' className='form-control-lg w-100' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <br />
                <br />
                <button className='btn btn-success  mx-auto'  type='button' onClick={() => handleRegister()}>Log In</button>
            </form>
        </div>
    )
}

export default Login;
