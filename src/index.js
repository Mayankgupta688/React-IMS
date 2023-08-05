import ReactDOM from "react-dom";
import React from "react";
import EmployeeAddComponent from "./components/EmployeeAddComponent";

ReactDOM.render((
    <div id="sample">
        <EmployeeAddComponent></EmployeeAddComponent>
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


