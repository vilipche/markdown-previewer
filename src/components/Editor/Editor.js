import React from "react";
import classes from "./Editor.module.css";

const editor = (props) => {
    return (
        <div className={`${classes.Editor} `}>
            <textarea onChange={props.inputHandler} />
        </div>
    );
};

export default editor;
