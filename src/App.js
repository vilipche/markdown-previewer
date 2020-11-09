import React from "react";

import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import "./App.css";

class App extends React.Component {
    state = {
        text: "This is my markdown text",
    };

    inputHandler = (event) => {
        this.setState({ text: event.target.value });
        console.log(event.target.value);
    };

    render() {
        return (
            <div id="root" className="root ">
                <div className="row">
                    <div className="column">
                        <Editor
                            inputHandler={this.inputHandler}
                            text={this.state.text}
                        />
                    </div>

                    <div className="column">
                        <Preview markdown={this.state.text} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
