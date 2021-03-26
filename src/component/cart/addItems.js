import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import Home from './home';
function Items() {
    const [itemName, setItemName] = useState('')
    const [itemDisc, setItemDisc] = useState('')
    const [itemLink, setItemLink] = useState('')
    const [itemRate, setItemRate] = useState('')
    var item=new Array();
    async function addItem() {
        var itemList = await (localStorage.getItem("itemList"));
        if(itemList !== null){
            item = JSON.parse(itemList);
        }
        if(itemName !== '' && itemDisc!== '' && itemLink!== '' && itemRate!==''){
            item.push({
                id:   item.length,
                name: itemName,
                disc: itemDisc,
                image: itemLink,
                rate: itemRate
            });
            localStorage.setItem("itemList",JSON.stringify(item));
            setItemLink('');setItemName('');setItemDisc('');setItemRate('');
        }
        else{
            alert("please fill all fields");
        }
    }

    return (
        <Router>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Add items</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <label class="sr-only" for="itemName">Item Name</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" value={itemName} class="form-control" onChange={(e) =>{setItemName(e.target.value)}} placeholder="Item Name" aria-label="itemName" aria-describedby="basic-addon1" />
                                </div>


                                <label class="sr-only" for="Disc">Description</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input type="text" value={itemDisc} class="form-control" onChange={(e) =>{setItemDisc(e.target.value)}} placeholder="Discription" aria-label="Disc" aria-describedby="basic-addon2" />
                                </div>

                                <label class="sr-only" for="image">Image Link</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input type="text" value={itemLink} class="form-control" onChange={(e) =>{setItemLink(e.target.value)}} placeholder="Image Link" aria-label="image" aria-describedby="basic-addon2" />
                                </div>

                                <label class="sr-only" for="rate">Rate</label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input type="text" value={itemRate} class="form-control" onChange={(e) =>{setItemRate(e.target.value)}} placeholder="rate" aria-label="rate" aria-describedby="basic-addon2" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" onClick={addItem} >Add</button>
                            <button type="button" class="btn btn-danger">Close</button>
                        </div>

                    </div>
                </div>
        </Router>
    )
}
export default Items;