import React, { useState } from 'react';
import "./navbar.styles.css";

const Navbar = (props) => {

    // const onClickHandler = () => alert("Welcome!!!");

    const [state, setState] = useState(true);

    // const[varible, functionThatSetTheValueOfTheVariable] = useState(initialValueOfTheVariable);

    function onClickHandler() {
        setState(!state);
        // alert(state);
    }

    return (
        <div>
            <ul id="navbar-wrapper">
                <li></li>
                {state && <li>Home</li>}
                {/* short-circuit operator use kore amra conditional-rendering korchi*/}
                <li>Contact</li>
                <li>About</li>
                <button onClick={onClickHandler}>{props.buttonContent}</button>
            </ul>
        </div>
    )
}

export default Navbar;