import React from "react";

export default function Block(props) {
    return(
        <div className="card">
                <img src={props.item.image} />
            <div className="overall">
                <div className="level-1">
                    <img src="./images/location.png" />
                    <span>{props.item.country}</span>
                </div>
                <span>
                    <h3>{props.item.place}</h3>
                </span>
                <span><h6>{props.item.visitStart} - {props.item.visitEnd}</h6></span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}