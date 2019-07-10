import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
    state = {
        nameArray: [
            { id : 'sdlkn',name: "Mohit", age: 20 },
            { id : 'lkass',name: "Manu", age: 21, children: "My hobbies : Talking alot." },
            { id : 'asknl', name: "Mk", age: 22 }
        ],
        showPerson : false
    }
    deleteNameHandler(index){
        const tempPersons = [...this.state.nameArray];
        tempPersons.splice(index,1);
        this.setState({nameArray : tempPersons});
    }
    nameChangeHandler = (event , id) => {
        const personIndex = this.state.nameArray.findIndex((p) => {
            return p.id === id;
        })
        const person = {
            ...this.state.nameArray[personIndex]
        };
        person.name = event.target.value;
        const newNameArray = [...this.state.nameArray];
        newNameArray[personIndex] = person;
        this.setState({
            nameArray: newNameArray
        })
    }
    togglePerson = () => {
        const currentValue = this.state.showPerson;
        this.setState({ showPerson: !currentValue })
    }
    
    render() {
        /** Inline styling */
        const style = {
            border: '1px solid blue',
            background : 'green',
            color : 'white',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '3px',
            ":hover" : {
                backgroundColor : "lightgreen",
                color : "black"
            }
        }
        let person = null;
        let classes = [];
        if(this.state.nameArray.length === 2){
            classes.push("red")
        }
        else if (this.state.nameArray.length === 1) {
            
            classes.push("bold", "red");
            
            console.log(classes);
            
            //classes.join(" "); 
        } 
        if(this.state.showPerson){
            person = (
                <div>
                    {this.state.nameArray.map( (person , index) =>{
                        return <Person key={index} 
                                    changed={(event) => this.nameChangeHandler(event,person.id)}
                                    click={this.deleteNameHandler.bind(this, index)} 
                                    name={person.name} age={person.age} 
                                     />

                    })}
                     {/* Passing functions as a reference
                        <Person onClick={this.switchNameHandler} name={this.state.nameArray[1].name} age={this.state.nameArray[1].age} changed={this.nameChangeHandler} />
                        {/* Prefered way of passing parameters to functions 
                        <Person click={this.switchNameHandler.bind(this, "Mohit kumar sidhu")} name={this.state.nameArray[2].name} age={this.state.nameArray[2].age} /> */}

                    </div> 
            )
            style.backgroundColor  = "red";
            style[":hover"] = {
                backgroundColor : "salmon",
                color : "black" 
            }
        }
        else{
            style.backgroundColor = "green";
        }
        return (
            <StyleRoot>
            <div className="App">
                <h1>I am a React app.</h1>
                <p className={classes.join(" ")}> This is really working!!</p>
                <button
                    style={style}
                    onClick={this.togglePerson}>Toggle Person</button>
               
                {
                   person 
                }

            </div>
            </StyleRoot>
        );
        //return React.createElement("div", {className : "App"},React.createElement("h1" , null , "I am JSX!!"));
    }
}

export default Radium(App);
