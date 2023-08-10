import ReactDOM from "react-dom";
import React from "react";
import {NewComponentOne , NewComponentTwo} from "./components/listingStateUp/HigherOrderComponent";

ReactDOM.render((
    <div id="sample">
        <NewComponentOne></NewComponentOne><br /><hr/>
        <NewComponentTwo></NewComponentTwo>
    </div>
), document.getElementById("root"));


var employeeObject = {
    name: "Mayank Gupta",
    age: 20
}

var employeeObjectOne = {
    name: "Varun Khera",
    age: 20
}


