import React from "react";
import marked from "marked";
import classes from "./Preview.module.css";

const preview = (props) => {
    return (
        <div
            className={`${classes.Preview} `}
            dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}
        ></div>
    );
};

export default preview;
