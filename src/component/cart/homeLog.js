import React,{ useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
function Homelogin() {
    const [lname,setLname] = useState('')
    const [lpass,setLpass] = useState('')
    var letters = /^[A-Za-z]+$/;
    var passVal =/^[A-Za-z]\w{7,14}$/;
    var Login = () => {
        if((lname.match(letters)) && (passVal.test(lpass))){
            var dbReg = (localStorage.getItem("localData"));
            if(dbReg!==null){
                dbReg=JSON.parse(dbReg);
                let logData = dbReg.filter(function (id,index) {
                    if(dbReg[index].user === lname && dbReg[index].passw=== lpass){
                        alert("login success");
                        addLog();
                        return id
                    }
                });
                if(logData.length != 1){
                    setLname('');setLpass('');
                    alert("please check username and password");
                } 
            }
            else{
                setLname('');setLpass('');
                alert("please register");
            }
        }
        else if(((!lname.match(letters)) || lname==null)){
            setLname('');setLpass('');
            alert("please enter valid username")
        }
        else if(!(passVal.test(lpass)) || lpass==null) {
            setLname('');setLpass('');
            alert("please enter password")
        }
    }
    var addLog=() =>{
        var log=new Array();
        var logD= localStorage.getItem("logCred");
        if(logD != null){
            log=JSON.parse(logD)
        }
        let logData = log.filter(function (id,index){
            return(log[index].name === lname)
        })
        console.log(logData.length);
        if(logData.length ===0){
            log.push({
                name: lname,
                passw: lpass,
                status: "active"
            })
            console.log(log);
            localStorage.setItem("logCred",JSON.stringify(log));
            window.location.reload();
        }
    }
    return (
        <Router>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Customer Sign In</h4>
                            <button type="button" class="close" data-dismiss="modal">??</button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <label class="sr-only" for="usrname">Username</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" onChange={e => setLname(e.target.value)} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>


                                <label class="sr-only" for="Password">Password</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input id="Password" type="password" class="form-control" onChange={e => setLpass(e.target.value)} placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" onClick={Login}  class="btn btn-primary" >Sign In</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Router>
    )
}
export default Homelogin;