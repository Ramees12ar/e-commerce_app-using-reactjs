import React, { useState } from 'react';
import './cart.css';
function Register() {
    const [RegData, setData] = useState([])
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [mob, setMob] = useState('')
    var dataSubmit = () => {
        var letters = /^[A-Za-z]+$/;
        let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let mobPattern = /^\d{10}$/
        let passVal =/^[A-Za-z]\w{7,14}$/;
        if((fname.match(letters)) && (lname.match(letters)) && (emailPattern.test(email)) && 
            (mob.match(mobPattern)) && (passVal.test(password))){
            //pushing the collected data to array
            console.log(fname,lname,email,mob,password);
            RegData.push({
                fname: fname,
                lname: lname,
                email: email,
                pass: password,
                mob: mob
                })
            
            console.log(RegData);
            localStorage.setItem("localData", JSON.stringify(RegData));
        }
        else{
            if(((!fname.match(letters)) || fname==null) || ((!fname.match(letters)) || fname==null)){
                alert("please enter valid name")
            }
            else if(mob === null || mob === "" || !(mobPattern.test(mob))){
                alert("please enter valid mobile number")
            }
            else if(!(emailPattern.test(email)) || email==null) {
                alert("please enter valid email address")
            }
            else if(!(passVal.test(password)) || password==null) {
                alert("please enter 7 or more characters")
            }
        }
        
    }

    //console.log(fname,lname);
    return(
        <div className="reg">
            <label className="label1">First Name : </label><br/>
            <input type="text" placeholder="Enter your First name" 
                    onChange={e => setFname(e.target.value)} />
                    <br/>
            <label className="label1">Last Name : </label><br/>
            <input type="text" placeholder="Enter your Last name" 
                    onChange={e => setLname(e.target.value)} />
                    <br/>
            <label className="label1">Mobile :</label><br/>
            <input type="text" placeholder="Enter your Mobile number" 
                    onChange={e => setMob(e.target.value)} />
                    <br/>
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
export default Register;