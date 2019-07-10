import React,{Component} from 'react';
// const withClass = (WrappedElement,className) =>{
//     return (props) => (
//         <div className={className}>
//             <WrappedElement {...props}/>
//         </div>
//     )
// }
const withClass = (WrappedElement,className) =>{
    return class extends Component{
        render(){
            return (
                <div className={className}>
                    <WrappedElement {...this.props}/>
                </div>
            )
        }
    }
    
}
export default withClass;