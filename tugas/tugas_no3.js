// Functional Component
import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleIncrement}>+1</button>
    </div>
  );
}

function Number() {
    return (
        <div>
        <Counter />
        </div>
    );
}

const myElement = <Number />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// Class Component
class Counter extends React.Component {
    state = { 
        counter: 0,
    };

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div>
            
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleIncrement}>+1</button>
            </div>
        );
    } 
}

class Number extends React.Component {
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
};

const myElement = <Number />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);