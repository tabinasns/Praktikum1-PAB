// button component
const MyButton = (props) => {
    const handleButtonClick = () => {
        alert(props.message);
    }

    return (
        <button onClick={handleButtonClick} style={{ margin: "10px" }}>
            {props.children}
        </button>
    );
}

// app component
const MyApp = () => {
    return (
        <div>
            <h1>Learn React</h1>
            <MyButton message="Learn React">React</MyButton>
            <MyButton message="Learn Javascript">Javascript</MyButton>
        </div>
    );
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);