import React from 'react'
import '../UI/Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div> // This props.children is by default available in the Card component. whether we mention it specially or not, it will be available.
  )
}

export default Card