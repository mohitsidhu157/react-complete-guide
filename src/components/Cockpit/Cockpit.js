import React from "react";
import Aux from "../../HOCs/Aux";

import myclasses from "./cockpit.module.css";
const cockpit = (props) => {
    let classes = [];
    let btnClass="";
   
    if(props.show === true){
        btnClass=myclasses.red;
    }
    if(props.nameArray.length < 3){
        classes.push(myclasses.textRed)
    }
    if (props.nameArray.length < 2) {
        classes.push(myclasses.bold);
    } 
    // return ([
    //     <h1 key="1">{props.appTitle}</h1>,
    //     <p className={classes.join(" ")} key="2"> This is really working!!</p>,
    //     <button className={btnClass} onClick={props.toggle} key="3">Toggle Person</button>

    // ]);
    return <Aux>
            <h1 key="1">{props.appTitle}</h1>
            <p className={classes.join(" ")} key="2"> This is really working!!</p>
            <button className={btnClass} onClick={props.toggle} key="3">Toggle Person</button>
            <button onClick={props.login}>Log in</button>
        </Aux>

}
export default cockpit;