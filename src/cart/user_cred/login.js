import React, { useState } from 'react';
import './cart.css';
function Login() {
    const [RegData, setData] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    var dataSubmit = () => {
        var
    }

    //console.log(fname,lname);
    return(
        <div className="reg">
            <label className="label1">Email :</label><br/>
            <input type="email" placeholder="Enter your Email" 
                    onChange={e => setEmail(e.target.value)} />
                    <br/>
            <label className="label1">Password :</label><br/>
            <input type="text" placeholder="Enter your Password" 
                    onChange={e => setPass(e.target.value)} />
                    <br/>
            <button onClick={dataSubmit}>Submit</button>
        </div>
    )
}
export default Login;