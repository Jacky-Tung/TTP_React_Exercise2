import React, { Component, ReactPropTypes} from "react";

class IncrementDecrement extends Component{
    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
            count: this.props.number,
        }
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        if(this.state.count <= 0){
            alert('Cannot be less than zero');
        }
        else this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render(){
        return (<div>
            <h1>Number: {this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>);
    }
}

// IncrementDecrement.propTypes = {
//   count: ReactPropTypes.number.isRequired,
// };

export default IncrementDecrement