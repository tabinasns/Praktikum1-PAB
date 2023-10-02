// Functional Component
const ReactTitle = () => {
    return <h3>Currently learning ReactJS</h3>
}
const JavascriptTitle = () => {
    return <h3> Currently learning Javascript</h3>
}

const MyComponent = () => {
    return (
        <div>
            <ReactTitle />
            <hr />
            <JavascriptTitle/>
        </div>
    );
}
let myElement = <MyComponent />

// props in functional component
const Practice = (props) => <h3>Practice: {props.course}</h3>;
myElement = (
    <div>
        <Practice course="Javascript" />
        <Practice course="ReactJS" />
        <Practice course="React Native" />
    </div>
);

const myApp = myElement;
ReactDOM.createRoot(document.getElementById('root')).render(myApp);