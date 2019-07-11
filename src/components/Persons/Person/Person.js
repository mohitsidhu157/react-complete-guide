import React, {PureComponent} from "react";
import classes from './Person.module.css';
import withClass from "../../../HOCs/withClass";
import Aux from "../../../HOCs/Aux";
import PropTypes from "prop-types";

class Person extends PureComponent{
    constructor(props){
        super(props);
        console.log("Inside constructor[Person.js]");
        this.inputElement = React.createRef();
        //We can also initialize the state in constructor this.state
    }
    componentWillMount(){
        console.log("Inside componentWillMount() [Person.js]");
    }
    componentDidMount(){
        console.log("Inside componentDidMount() [Person.js]");
    }
    focus(){
        this.inputElement.current.focus();
    }
    componentWillReceiveProps(nextProps){
        console.log("inside componentWillReceiveProps in [Person.js]", nextProps);
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("Inside shouldComponentUpdate in [Person.js]",nextProps,nextState);
    //     return true;
    // }
    componentWillUpdate(nextProps,nextState){
        console.log("Inside componentWillUpdate in [Person.js]",nextProps,nextState);

    }
    componentDidUpdate(){
        console.log("Inside componentDidUpdate in [Person.js]");

    }
    render(){
        console.log("Inside render() [Person.js]");
        return <Aux>
            <h1 onClick={this.props.click}>I am a Person. My name is {this.props.name} and i am {this.props.age} years old.!! </h1>
           
            {/** Two-way binding */}
            <input 
                type="text" 
                ref={this.inputElement}
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>
    }
}
Person.propTypes = {
    click : PropTypes.func,
    changed : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number
}
export default withClass(Person,classes.Person);