import React,{ useState } from 'react';
import Home from './home';
function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [mob, setMob] = useState('')
    const [user,setUser] = useState('')
    const [unique, setUn] = useState('available')
    const [color, setCo] = useState('')
    var letters = /^[A-Za-z]+$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mobPattern = /^\d{10}$/
    var passVal =/^[A-Za-z]\w{7,14}$/;
    var userName = (e) => {
        var str=localStorage.getItem("localData");
        var data = e.target.value
        setUser(data);
        if(str !== null){
            str = JSON.parse(str);
            if(data.length < 5){
                setCo("red")
                setUn("must be greater than 5 char");
                return;
            }
            let logData = str.filter(function (id,index) {
                var b=str[index].user;
                return (b.includes(data)===true)
            })
            if(logData.length ===0){
                setCo("green")
                setUn("available");
            }
            else{
                setCo("red")
                setUn("not available");
            }
        }
        
    }
    async function dataSubmit() {
        if((name.match(letters)) && (emailPattern.test(email)) && 
            (mob.match(mobPattern)) && (user.match(letters)) && (user.length > 5)
            && (unique == "available") && (passVal.test(password))){
            //pushing the collected data to array
            //console.log(name,email,mob,password);
            setCo('');
            setUn('');
            var str=await (localStorage.getItem("localData"));
            if(str != null){
                var fetchData= JSON.parse(str);
            }
            else{
                fetchData=[];
            }
            fetchData.push({
                name: name,
                email: email,
                mob: mob,
                user: user,
                passw: password
                })
            
            console.log(fetchData);
            localStorage.setItem("localData", JSON.stringify(fetchData));
        }
        else{
            if(((!name.match(letters)) || name==null)){
                alert("please enter valid name")
            }
            else if(!(emailPattern.test(email)) || email==null) {
                alert("please enter valid email address")
            }
            else if(mob === null || mob === "" || !(mobPattern.test(mob))){
                alert("please enter valid mobile number")
            }
            else if(((!user.match(letters)) || user==null)){
                alert("please enter valid username")
            }
            else if((user.length > 5) || (unique !== "available")){
                alert("username already exist or less than 5 length");
            }
            else if(!(passVal.test(password)) || password==null) {
                alert("password must be 7 or more characters")
            }
        }
        setCo('');setEmail('');setMob('');setName('');setPass('');setUn('');setUser('');
    }
    return (
    <div>
        <Home />
        <div class="modal" id="myModal2">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Customer Register</h4>
                        <button type="button" class="close" data-dismiss="modal">×</button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <label class="sr-only" for="Name">Name</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" value={name} class="form-control" 
                                    onChange={e => setName(e.target.value)} placeholder="Full Name" 
                                    aria-label="Name" aria-describedby="basic-addon1" />
                            </div>

                            <label class="sr-only" for="Email">Email</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="email" value={email} class="form-control" 
                                    onChange={e => setEmail(e.target.value)} placeholder="Email" 
                                    aria-label="Email" aria-describedby="basic-addon1" />
                            </div>

                            <label class="sr-only" for="Mob">Mobile</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" value={mob} class="form-control" 
                                    onChange={e => setMob(e.target.value)} placeholder="+91 *******" 
                                    aria-label="Mob" aria-describedby="basic-addon1" />
                            </div>

                            <label class="sr-only" for="Username">Username</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" value={user} class="form-control" 
                                    onChange={userName} placeholder="Username" 
                                    aria-label="Username" aria-describedby="basic-addon1" />
                                    <span id={color}>{unique}</span>
                            </div>

                            <label class="sr-only" for="Password">Password</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                                </div>
                                <input id="Password" value={password} type="password" class="form-control" 
                                    onChange={e => setPass(e.target.value)} placeholder="Password" 
                                    aria-label="Password" aria-describedby="basic-addon2" />
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" onClick={dataSubmit} class="btn btn-primary" >Sign Up</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>\
    </div>
    )
}
export default Register;