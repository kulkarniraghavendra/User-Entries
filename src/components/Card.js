import React from 'react';
import classes from "./Card.module.css";

const Card = (props) => {
    const classList = `${classes.card} ${props.className}`
    return <div className={classList.toString()}>{props.children}</div>
}

export default Card;