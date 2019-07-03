import React, { Component } from 'react';
import  myclasses from './App.module.css';
import Person from './Person/Person.js';
import Errorboundry from './ErrorBoundry/ErrorBoundry';
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
        let person = null;
        let btnClass = "";
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
                    {
                        this.state.nameArray.map( (person , index) => {
                            return (
                                <Errorboundry key={index} >
                                <Person 
                                changed={(event) => this.nameChangeHandler(event,person.id)}
                                click={this.deleteNameHandler.bind(this, index)} 
                                name={person.name} age={person.age} 
                                 />
                            </Errorboundry> 
                            )
                               
                                

                    })}
                     {/* Passing functions as a reference
                        <Person onClick={this.switchNameHandler} name={this.state.nameArray[1].name} age={this.state.nameArray[1].age} changed={this.nameChangeHandler} />
                        {/* Prefered way of passing parameters to functions 
                        <Person click={this.switchNameHandler.bind(this, "Mohit kumar sidhu")} name={this.state.nameArray[2].name} age={this.state.nameArray[2].age} /> */}

                    </div> 
            )
            
            
        }
       
        return (
        
            <div className={myclasses.App}>
                <h1>I am a React app.</h1>
                <p className={classes.join(" ")}> This is really working!!</p>
                <button className={`${myclasses.button} ${btnClass}`} onClick={this.togglePerson}>Toggle Person</button>
               
                {
                   person 
                }

            </div>
            
        );
        //return React.createElement("div", {className : "App"},React.createElement("h1" , null , "I am JSX!!"));
    }
}

export default App;
