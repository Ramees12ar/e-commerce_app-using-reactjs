import React, { useEffect, useState } from 'react';
import Homelogin from './homeLog';
function Home() {
    const [hid, setId] = useState('')
    // useEffect(() => {
    //         set
    //         var str = localStorage.getItem("itemList");
    //         if(str != null){
    //             str = JSON.parse(str);
    //             for(var i=0;i<str.length;i++){
    //                 itemData.push({
    //                     id: i,
    //                     name: str[i].name,
    //                     disc: str[i].disc,
    //                     image: str[i].image
    //                 })
    //             }
    //         }
    //     },1)   
    var itemData=new Array();
    var str = localStorage.getItem("itemList");
    if(str != null){
        str = JSON.parse(str);
        for(var i=0;i<str.length;i++){
            itemData.push({
                id: i,
                name: str[i].name,
                disc: str[i].disc,
                image: str[i].image,
                rate: str[i].rate
            })
        }
    }
    var addCart = (id) =>{
        var addtoCart= new Array();
        var add = (localStorage.getItem("cartData"));
        if(add != null){
            addtoCart=JSON.parse(add);
        }
        var str = JSON.parse(localStorage.getItem("itemList"));
        addtoCart.push({
            name: str[id].name,
            disc: str[id].disc,
            image: str[id].image,
            rate: str[id].rate
        })
        localStorage.setItem("cartData",JSON.stringify(addtoCart));
    }
    //console.log(str);
    
    //console.log(itemData);
    // https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
    // https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg
    return (
    <div>
        <Homelogin />
    <div className="container">
        <div className="row">
            {
            itemData.map( (i,index) => {
            return (
            <div className="col-sm">
                  <div class="card" style={{width:"18rem"}}>
                      <img class="card-img-top img-thumbnail" src={i.image} alt="Card image cap" />
                      <div class="card-body">
                          <h5 class="card-title">{ i.name }</h5>
                          <p class="card-text">{ i.disc }</p>
                          <p class="card-text" style={{fontWeight:"bold",textAlign:"right"}}>{ i.rate }₹</p>
                          <button onClick={()=>{addCart(index)}} class="btn btn-primary">Add cart</button>
                          {/* modal-id="item" data-toggle="modal" data-target="#myModal" */}
                      </div>
                  </div>
              </div>
            )
                })
            }
        </div>
    </div>
    </div>
    )
}
export default Home;