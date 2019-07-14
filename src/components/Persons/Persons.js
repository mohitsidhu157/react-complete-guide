import React ,{ PureComponent } from "react";
import Person from "./Person/Person";
import Errorboundry from "../ErrorBoundry/ErrorBoundry";

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log("Inside constructor[Persons.js]");
        this.lastPersonRef = React.createRef();
        //We can also initialize the state in constructor this.state
    }
    componentWillMount(){
        console.log("Inside componentWillMount() [Persons.js]");
    }
    componentDidMount(){
        console.log("Inside componentDidMount() [Persons.js]");
        this.lastPersonRef.current.focus();
    }
    componentWillReceiveProps(nextProps){
        console.log("inside componentWillReceiveProps in [Person.js]", nextProps);
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("Inside shouldComponentUpdate in [Person.js]",nextProps,nextState);
    //     return nextProps.nameArray !== this.props.nameArray ||
    //             nextProps.changed !== this.props.changed ||
    //             nextProps.clicked !==  this.props.changed;
    // }
    componentWillUpdate(nextProps,nextState){
        console.log("Inside componentWillUpdate in [Person.js]",nextProps,nextState);

    }
    componentDidUpdate(){
        console.log("Inside componentDidUpdate in [Person.js]");

    }
    render(){
        console.log("Inside render() [Persons.js]")
        return ( this.props.nameArray.map( (person , index) => {
            return (
                <Errorboundry key={index} >
                <Person 
                ref={this.lastPersonRef}
                changed={(event) => this.props.changed(event,person.id)}
                click={()=> this.props.clicked(index)} 
                name={person.name} age={person.age} 
                position={index}
                />
            </Errorboundry> 
            )}
    ));
    }
}

export default Persons;