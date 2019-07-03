import React from "react";
import classes from './Person.module.css';


const person = (props) => {
    
    return (
            
            <div className={classes.Person}>
            <h1 onClick={props.click}>I am a Person. My name is {props.name} and i am {props.age} years old.!! </h1>
           
            {/** Two-way binding */}
            <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        )
    
    
}
export default person;