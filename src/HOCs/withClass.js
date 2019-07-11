import React,{Component} from 'react';
// const withClass = (WrappedElement,className) =>{
//     return (props) => (
//         <div className={className}>
//             <WrappedElement {...props}/>
//         </div>
//     )
// }
const withClass = (WrappedElement,className) =>{
    const WithClass =  class extends Component{
        render(){
            return (
                <div className={className}>
                    <WrappedElement {...this.props } ref={this.props.forwardedRef}/>
                </div>
            )
        }
    }
    return React.forwardRef((props, ref)=> {
        return <WithClass {...props} forwardedRef={ref}/>
    })
}
export default withClass;