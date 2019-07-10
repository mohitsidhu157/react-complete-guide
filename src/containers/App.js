import React, { PureComponent } from 'react';
import  myclasses from './App.module.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from "../HOCs/withClass";
import Aux from '../HOCs/Aux';
class App extends PureComponent {
    constructor(props){
        super(props);
        console.log("Inside constructor[App.js]");
        //We can also initialize the state in constructor this.state
    }
    state = {
        nameArray: [
            { id : 'sdlkn',name: "Mohit", age: 20 },
            { id : 'lkass',name: "Manu", age: 21, children: "My hobbies : Talking alot." },
            { id : 'asknl', name: "Mk", age: 22 }
        ],
        showPerson : false
    }
    componentWillMount(){
        console.log("Inside componentWillMount() [App.js]");
    }
    componentDidMount(){
        console.log("Inside componentDidMount() [App.js]")
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("Inside shouldComponentUpdate in [App.js]",nextProps,nextState);
    //     return nextState.nameArray !== this.state.nameArray || 
    //             nextState.showPerson !== this.state.showPerson;
    // }
    componentWillUpdate(nextProps,nextState){
        console.log("Inside componentWillUpdate in [App.js]",nextProps,nextState);

    }
    componentDidUpdate(){
        console.log("Inside componentDidUpdate in [App.js]");

    }
   
    deleteNameHandler = (index) =>{
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
        console.log("Inside render() [App.js]")
        let person = null;
        // let btnClass = "";
        
        if(this.state.showPerson){          
            person = (
                <div>
                    <Persons nameArray={this.state.nameArray} 
                    clicked={this.deleteNameHandler} 
                    changed={this.nameChangeHandler}/>
                                    
                     {/* Passing functions as a reference
                        <Person onClick={this.switchNameHandler} name={this.state.nameArray[1].name} age={this.state.nameArray[1].age} changed={this.nameChangeHandler} />
                        {/* Prefered way of passing parameters to functions 
                        <Person click={this.switchNameHandler.bind(this, "Mohit kumar sidhu")} name={this.state.nameArray[2].name} age={this.state.nameArray[2].age} /> */}
                    </div> 
            )     
        }       
        return (        
            <Aux>
                <button onClick={()=>{this.setState({showPerson:true})}}>Show Persons</button>
               <Cockpit 
                    appTitle={this.props.title}
                    nameArray={this.state.nameArray} 
                    toggle={this.togglePerson} 
                    show = {this.state.showPerson}
                />
                {
                   person 
                }

            </Aux>
            
        );
        //return React.createElement("div", {className : "App"},React.createElement("h1" , null , "I am JSX!!"));
    }
}
export default withClass(App,myclasses.App);