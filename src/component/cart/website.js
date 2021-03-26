import React, { useEffect, useState } from 'react';
import './websites.css';
function Page() {
  var ind=[];
  var count;
  const [newTotal,setTotal] = useState(0)
  useEffect(() =>{
    totalRate();
  },0)
  function totalRate(){
    var logCr=(localStorage.getItem("logCred"));
    if(logCr.length!==2){
      console.log("hi");
      logCr=JSON.parse(logCr);
      var getting = logCr.filter(function (id,index) {
        return(logCr[index].status === "active")
      })
      var str = JSON.parse(localStorage.getItem("cartData"));
      var newcart = str.filter(function (id,index) {
          return (str[index].user===getting[0].name)
      })
      var newTotal = newcart.reduce((prev,item1) => {
        return prev + (item1.rate * item1.count)
      },0)
      setTotal(newTotal);
    }
    else{
      <h2>Please Login first</h2>
    }
    // else{
    //   return(
    //     <h2>Cart is empty. Please login...</h2>
    //   )
    // }
  }
  var str = localStorage.getItem("cartData");
  var removeItem = (i) =>{
      var str = JSON.parse(localStorage.getItem("cartData"));
      var newcart = str.filter(function (id,index) {
        return(str[index].id !== i)
      })
      localStorage.setItem("cartData",JSON.stringify(newcart));
      window.location.reload();
    }


    //Update count of item increment
  var addCount = (val) => {
      var countData=[];
      var str = JSON.parse(localStorage.getItem("cartData"));
      var newcart = str.map(function (id,index) {
        if(str[index].id === val){
              var a=str[index].count;
              var b=str[index].rate;
              a+=1;
              str[index].count=a;
        }
        countData.push(str[index])
      })
      localStorage.setItem("cartData",JSON.stringify(countData));
      window.location.reload();
  }

  //update count of item decriment
  var subCount = (val) => {
    var countData=[];
    var str = JSON.parse(localStorage.getItem("cartData"));
    var newcart = str.map(function (id,index) {
      if(str[index].id === val){
            var a=str[index].count;
            var b=str[index].rate;
            a-=1;
            if(a>=1){str[index].count=a;}      
      }
      countData.push(str[index])
    })
    localStorage.setItem("cartData",JSON.stringify(countData));
    window.location.reload();
  }
  var userCred=(localStorage.getItem("logCred"))
  if(userCred.length!==2){
    var str = JSON.parse(localStorage.getItem("cartData"));
    if(str !== null){
      var userCred=(localStorage.getItem("logCred"))
      if(userCred!==null){
        userCred=JSON.parse(userCred);
        var getting = userCred.filter(function (id,index) {
          return(userCred[index].status === "active")
        })
        if(getting.length===0){
          count=0;
        }
        else{
          var str = JSON.parse(localStorage.getItem("cartData"));
          var newStr = str.filter(function (id,index) {
            if(str[index].user === getting[0].name){
              ind.push({ida: index})
              return id
            }
          })
          if(newStr.length>=0){
            count=(newStr.length);
          }
          else{
            count=0;
          }
          var newData=JSON.stringify(newStr);
        }
      }
    }
    else{
      alert("logouted");
    }
    console.log(newStr);

  }
  else{
    return(
      <h2>Please Login first</h2>
    )
  }
  
    var orderCheckout = () => {
      var logCr=JSON.parse(localStorage.getItem("logCred"));
      var getting = logCr.filter(function (id,index) {
        return(logCr[index].status === "active")
      })
      var str = JSON.parse(localStorage.getItem("cartData"));
      var newcart = str.filter(function (id,index) {
          return (str[index].user!==getting[0].name)
      })
      localStorage.setItem("cartData",JSON.stringify(newcart));
      alert(`Hi ${getting[0].name}, Your order succefully place. Total amount ${newTotal}. Thank you!`)
      window.location.reload();
    }
    return (
        <section>
          <div class="row">
            <div class="col-lg-8">
              <div class="card wish-list mb-3">
                <div class="card-body">
                  <h5 class="mb-4">Cart (<span>{count}</span> items)</h5>
                  {
                  newStr.map( (i,index) => {
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
                                <button onClick={()=>subCount(i.id)} class="btn btn-white btn-minuse" type="button">-</button>
                              </span>
                              <input type="text" class="m-1 add-color text-center" min="1" value={i.count} style={{width:"100px"}} />
                              <span class="input-group-btn">
                                <button onClick={()=>{addCount(i.id)}} class="btn btn-red btn-pluss" type="button">+</button>
                              </span>
                            </div>
                            <small id="passwordHelpBlock" class="form-text text-muted text-center">
                              (Note, 1 piece)
                            </small>
                          </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <button onClick={() => {removeItem(i.id)}} type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                class="fas fa-trash-alt mr-1"></i> Remove item </button>
                          </div>
                          <p class="mb-0"><span><strong>{i.rate * i.count}₹</strong></span></p>
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
                      Total amount
                      <span>{newTotal}₹</span>
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
                      <span><strong>{newTotal}₹</strong></span>
                    </li>
                  </ul>
        
                  <button type="button" onClick={orderCheckout} class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
        
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Page;