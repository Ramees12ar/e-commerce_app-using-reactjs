
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Register from './cart/user_cred/register'
function App() {
  return (
    <div class="cnt2">
	        <nav class="navbar navbar-expand-lg navbar-light bg-warning" >
                <a class="navbar-brand" href="#">E-cart</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto topnav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-primary text-white" type="button" href="#" data-toggle="modal" data-target="#myModal">Sign In</a>                  
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-danger text-white" type="button" href="#" data-toggle="modal" data-target="#myModal">Register</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- The Modal --> */}
                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                    {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                                <h4 class="modal-title">Customer Sign In</h4>
                                <button type="button" class="close" data-dismiss="modal">×</button>
                            </div>

                    {/* <!-- Modal body --> */}
                            <div class="modal-body">
                                <form>
                                    <label class="sr-only" for="usrname">Username</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>


                                    <label class="sr-only" for="Password">Name</label>
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                                        </div>
                                        <input id="Password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                    </div>
                                </form>
                            </div>

                            {/* <!-- Modal footer --> */}
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary" >Sign In</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <br/><br/>
              <div className="container">
                <div className="row">
                    <div className="col-sm">
                          <div class="card" style={{width:"18rem"}}>
                              <img class="card-img-top img-thumbnail" src="https://freshsparks.com/wp/wp-content/uploads/2014/10/project_image_icon_TIS.jpg" alt="Card image cap" />
                              <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="btn btn-primary">Add cart</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm">
                          <div class="card" style={{width:"18rem"}}>
                              <img class="card-img-top img-thumbnail" src="https://freshsparks.com/wp/wp-content/uploads/2014/10/project_image_icon_TIS.jpg" alt="Card image cap" />
                              <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="btn btn-primary">Add cart</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm">
                        <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top img-thumbnail" src="https://freshsparks.com/wp/wp-content/uploads/2014/10/project_image_icon_TIS.jpg" alt="Card image cap" />
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm">
                          <div class="card" style={{width:"18rem"}}>
                              <img class="card-img-top img-thumbnail" src="https://freshsparks.com/wp/wp-content/uploads/2014/10/project_image_icon_TIS.jpg" alt="Card image cap" />
                              <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="btn btn-primary">Add cart</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm">
                          <div class="card" style={{width:"18rem"}}>
                              <img class="card-img-top img-thumbnail" src="https://freshsparks.com/wp/wp-content/uploads/2014/10/project_image_icon_TIS.jpg" alt="Card image cap" />
                              <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="btn btn-primary">Add cart</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm">
                        <div class="card" style={{width:"18rem"}}>
                          <img class="card-img-top img-thumbnail" src="https://i01.appmifile.com/webfile/globalimg/7/3C9A8327-71B0-C265-0BF1-006BFFD99C57.png" alt="Card image cap" />
                          <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add cart</a>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
        </div>
    // <Router>
    //   <div className="App">
    //   <div class="topnav">
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li> 
		// 		      <Link to="/register">Register</Link> 
		// 	    </li> 
		// 	    <li> 
		// 		      <Link to="/login">Login</Link> 
		// 	    </li> 
		// 	  </ul> 
    //     </div>
		// 	  <Switch> 
		// 	      <Route exact path='/' component={Page}></Route> 
    //         <Route exact path='/register' component={Flipkart}></Route> 
    //         {/* <Route exact path='/login' component={Login}></Route> */}
    //         {/* <Route exact path='/view/:id' component={View}></Route>   */}
		// 	  </Switch> 
    //   </div>
    // </Router>
  );
}

export default App;