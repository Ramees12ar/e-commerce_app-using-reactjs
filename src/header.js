import React, { useState, useEffect } from 'react';
import './App.css';
import cart from  './component/images/cart.png';
import Register from './component/cart/Register';
import Login from './component/cart/login';
import Page from './component/cart/website';
import { BrowserRouter as Router,Redirect, Route, Link, Switch } from 'react-router-dom';
import Items from './component/cart/addItems';
import Home from './component/cart/home';
function Header() {
    var cartval=0;
    var view;
    var view2="active";
    var name;
    var logCred=(localStorage.getItem("logCred"));
    if(logCred != null){
        var logCr=JSON.parse(logCred);
    }
    else{
        logCr=new Array();
    }
    var getting = logCr.filter(function (id,index) {
            if(logCr[index].status === "active"){
                view="active"
                view2=''
                name=logCr[index].name
            }
            else{
                view='';
                view2='active'
            }
        })
    var Logout= () =>{
        var getting = logCr.filter(function (id,index) {
            return(logCr[index].status !== "active")
        })
        localStorage.setItem("logCred",JSON.stringify(getting));
        alert("successfully logOuted");
        cartval=0;
        window.location.reload();
    }
    var getting = logCr.filter(function (id,index) {
        return(logCr[index].status === "active")
    })
    if(getting.length ===1){
        var str = localStorage.getItem("cartData");
        if(str !=null){
            str = JSON.parse(str);
            var newStr = str.filter(function (id,index) {
                return(str[index].user === name)
            })
            console.log(newStr.length);
            cartval=newStr.length;
        }
        else{
            cartval=0;
        }
    }
    else{
        cartval =0;
    }

    //item adding initially
    var item=[{
        id:0,
        name: "T-shirt1",
        disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
        image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        rate: 360
        },
        {
            id:1,
            name: "T-shirt2",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
            rate: 460
        },
        {
            id:2,
            name: "T-shirt3",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
            rate: 180
        },
	    {
            id:3,
            name: "T-shirt4",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
            rate: 740
        },
	    {
            id:4,
            name: "T-shirt5",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
            rate: 410
        },
	    {
            id:5,
            name: "T-shirt6",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
            rate: 179
        },
	    {
            id:6,
            name: "T-shirt7",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
            rate: 879
        },
	    {
            id:7,
            name: "T-shirt8",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
            rate: 999
        },
	    {
            id:8,
            name: "T-shirt9",
            disc:"A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.",
            image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
            rate: 599
        }
    ]
    var clctItem=localStorage.getItem("itemList");
    if(clctItem!=null){
        clctItem=JSON.parse(clctItem);
        var newStock = clctItem.filter(function (id,index) {
            return(clctItem[index].id === 0)
        })
        if(newStock.length===0){
            localStorage.setItem("itemList",JSON.stringify(item));
        }
    }
    else{
        localStorage.setItem("itemList",JSON.stringify(item));
    }
  return (
    <Router>
        <div class="cnt2">
	        <nav class="navbar navbar-expand-lg navbar-light bg-warning" >
                <a class="navbar-brand" href="#">E-cart</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto topnav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><Link to="/home">Home <span class="sr-only">(current)</span></Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/items">Add items</Link></a>
                        </li>
                        <li class="nav-item">
                            <Link to="/cart"><img style={{width:"35px",height:"30px",marginTop:"5px",
                                paddingLeft:"3px",paddingRight:"3px",fontWeight:"bold"}} src={cart} />
                                <span className="dot cart_background">{cartval}</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a id={view}
                                class="nav-link btn btn-primary text-white" type="button" 
                                href="#" data-toggle="modal" data-target="#myModal">
                                <Link to="/login" style={{ color:"white"}}>
                                    Sign In
                                </Link>
                            </a>                 
                        </li>
                        <li class="nav-item">
                            <a id={view2} class="nav-link btn btn-primary text-white" type="button">{name}
                            </a>                 
                        </li>
                        <li class="nav-item">
                            <a id={view2} onClick={Logout} class="nav-link btn btn-danger text-white" type="button" >
                                logout
                            </a>
                        </li>
                        <li class="nav-item">
                            <a id={view}
                                class="nav-link btn btn-danger text-white" type="button" 
                                href="#" data-toggle="modal" data-target="#myModal2">
                                <Link to="/register" style={{ textDecoration:"none",color:"white"}}>
                                    Register
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav><br/>
            <Switch>
                <Route exact path='/' component={Home} />   
                <Route exact path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/items' component={Items} />
                <Route exact path='/cart' component={Page} />
                
            </Switch>
        </div>
     </Router>    
  );
}

export default Header;