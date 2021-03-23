import React, { useEffect, useState } from 'react';
import Homelogin from './homeLog';
function Home() {
    const [itemData, setData] = useState([])
    var str = localStorage.getItem("itemList")
    if(str != null){
        str = JSON.parse(str);
    }
    //console.log(str);
    for(var i=0;i<str.length;i++){
        itemData.push({
            id: i,
            name: str[i].name,
            disc: str[i].disc,
            image: str[i].image
        })
    }
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
                          <a href="#" data-toggle="modal" data-target="#myModal" class="btn btn-primary">Add cart</a>
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