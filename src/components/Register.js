import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {

    const [fname, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profile, setProfile] = useState('')


    function handleRegister(e) {

        if (password === confirmPassword) {
            const formData = new FormData()
            formData.append('name', fname)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('image',profile)
            console.log(formData);
            axios.post('http://192.168.2.195:9000/uploadImage', formData).then((res) => {
                if (res) {
                    console.log('Registered');
                    alert('data registered successfully....')
                    // window.location.href='/login'
                }
            })
        } else {
            console.log('Password Does\'nt Matched');
        }
    }


    return (
        <div className='mx-auto ' style={{ 'width': '40%' }}>
            <h2 >Register User</h2>
            <form className='row g-3 mx-auto'>
                <div className='col'>
                    <label className="form-label" for='fname'>Enter Your First Name</label>
                    <br />

                    <input name='fname' className='form-control-lg w-100' type='text' value={fname} onChange={(e) => setFName(e.target.value)} />
                </div>
              
                <div className='col-12'>
                    <label className="form-label" for='email' >Enter Your Email </label>
                    <br />

                    <input name='email' className='form-control-lg w-100' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='col-12'>
                    <label className="form-label" for='pwd'>Create Your Password</label>
                    <br />
                    <input name='pwd' className='form-control-lg w-100' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='col-12'>
                    <label className="form-label" for='cpwd'>Confirm Your Password</label>
                    <br />

                    <input name='cpwd' className='form-control-lg w-100' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className='col-12'>
                    <label for="profile" class="form-label">Large file input example</label>
                    <input class="form-control form-control-lg" name="profile" type="file" onChange={(e) => setProfile(e.target.files[0])} />
                </div>
                <br />
                <br />
                <button className='btn btn-success ' type='button' onClick={() => handleRegister()}>Register</button>
            </form>
        </div>
    )
}

export default Register;
