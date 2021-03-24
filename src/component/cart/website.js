import React from 'react';
import './websites.css';
function Page() {
  var cartData=new Array();
  var str = localStorage.getItem("cartData");
  if(str != null){
      var userCred=JSON.parse(localStorage.getItem("logCred"))
      var getting = userCred.filter(function (id,index) {
          return(userCred[index].status === "active")
      })
      if(getting.length===0){
        alert("please login...");
      }
      else{
        str = JSON.parse(str);
        var newStr = str.filter(function (id,index) {
          return(str[index].user === getting[0].name)
        })
        console.log(newStr);
        for(var i=0;i<newStr.length;i++){
            cartData.push({
                id: i,
                name: str[i].name,
                disc: str[i].disc,
                image: str[i].image,
                rate: str[i].rate
            })
        }
      }
  }
    return (
        <section>
          <div class="row">
            <div class="col-lg-8">
              <div class="card wish-list mb-3">
                <div class="card-body">
                  <h5 class="mb-4">Cart (<span>1</span> items)</h5>
                  {
                  cartData.map( (i,index) => {
                    return (
                  <div class="row mb-4">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img class="img-fluid w-100"
                          src={i.image} 
                            alt="Sample" />
                      </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>{i.name}</h5>
                            <p class="mb-3 text-muted text-uppercase small w-100">{i.disc}</p>
                          </div>
                          <div>
                            <div class="def-number-input number-input safari_only mb-0 w-100">
                              <span class="input-group-btn">
                                <button class="btn btn-white btn-minuse" type="button">-</button>
                              </span>
                              <input type="text" class="m-1 add-color text-center" 
                                maxlength="3" value="1" style={{width:"100px"}} />
                              <span class="input-group-btn">
                                <button class="btn btn-red btn-pluss" type="button">+</button>
                              </span>
                            </div>
                            <small id="passwordHelpBlock" class="form-text text-muted text-center">
                              (Note, 1 piece)
                            </small>
                          </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                class="fas fa-trash-alt mr-1"></i> Remove item </a>
                          </div>
                          <p class="mb-0"><span><strong>{i.rate}₹</strong></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                      )
                    })
                  }
                  <hr class="mb-4"/>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card mb-3">
                <div class="card-body">
        
                  <h5 class="mb-3">The total amount of</h5>
        
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Temporary amount
                      <span>$25.98</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>The total amount of</strong>
                        <strong>
                          <p class="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span><strong>$53.98</strong></span>
                    </li>
                  </ul>
        
                  <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
        
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Page;