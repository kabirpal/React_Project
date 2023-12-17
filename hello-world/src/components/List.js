import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { MouseEvent } from "react";

interface ListGroupProps{
    item : string[],
    heading : string,
    onSelectedItem : (item) => void
}

function ListGroup({items,heading, onSelectedItem}:ListGroupProps){


    
    // let selectedItem = 0;

    const [selectedItem,setSelectedItem] = useState(-1);

    // phonesPurchasedByMe = []
    // const eventHandler = (event:MouseEvent) => console.log(event);
    return (
        <div className="container">             
            <h1>
                {heading}
            </h1>
            {items.length === 0 && <p>Page not found</p>}
            <ul className="list-group">
                {items.map((phone, index) => 
                <li className={selectedItem === index ? 'list-group-item active' : 'list-group-item'} onMouseEnter={()=>setSelectedItem(index)} onClick={()=>{onSelectedItem(phone); console.log(phone)}}key={index}>
                    {phone}
                </li>)}
            </ul>
        </div>
    )
}

export default ListGroup