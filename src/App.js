import React, { useState } from 'react';
import './App.css';
import cart from  './component/images/cart.png'
import Home from './component/cart/home';
import Register from './component/cart/Register';
import Login from './component/cart/login';
import Page from './component/cart/website';
import { BrowserRouter as Router,Redirect, Route, Link, Switch } from 'react-router-dom';
import Items from './component/cart/addItems';
function App() {
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
                                paddingLeft:"3px",paddingRight:"3px"}} src={cart} />
                                <span className="dot cart_background">15</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a 
                                class="nav-link btn btn-primary text-white" type="button" 
                                href="#" data-toggle="modal" data-target="#myModal">
                                <Link to="/login" style={{ color:"white"}}>
                                    Sign In
                                </Link>
                            </a>                 
                        </li>
                        <li class="nav-item">
                            <a 
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

export default App;