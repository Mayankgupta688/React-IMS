import ReactDOM from "react-dom";
import React from "react";
import AddNewComponent from "./components/AddEmployeeComponent.js/AddNewComponent";

ReactDOM.render((
    <div id="sample">
        <AddNewComponent></AddNewComponent>
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


