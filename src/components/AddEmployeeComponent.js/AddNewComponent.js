import { useEffect, useState } from "react";
import Axios from "axios";

export default function AddNewComponent() {

    var [employees, setEmployees] = useState([]);
    var [newEmployee, setNewEmployee] = useState({ name: "", age: ""});
    
    useEffect(function () {
        // Make request to get data...
        Axios.get("http://localhost:5000/getEmployees").then(
            function (response) {
                setEmployees(response.data)
            },
            (err) => {
                debugger;
            }
        )
    }, [])
    
    function addEmployee() {
        debugger;
        Axios.post("http://localhost:5000/addEmployee", newEmployee).then(
            (response) => {
                debugger;
                Axios.get("http://localhost:5000/getEmployees").then(
                    function (response) {
                        setEmployees(response.data)
                    },
                    (err) => {
                        debugger;
                    }
                )
                    },
                    (err) => { }
                )
        
    }
    
    function deleteEmployee(event) {
        debugger;
        Axios.delete("http://localhost:5000/deleteEmployee/" + event.target.id).then((response) => {
            setEmployees(response.data)
        })
    }
    
    function updateData() {
        debugger;
        Axios.put("http://localhost:5000/updateData/Mayank?somedata=random", { age: 15 }).then(() => {
            debugger;
        })
    }
    
    function updateNewUser(event) {
        
        // Event to capture new Employee input event
        setNewEmployee({
            ...newEmployee,
            [event.target.id]: event.target.value
        })
    }
    return (
        <div>
            <div><br/>
                Enter Name <input type="text" id="name" value={newEmployee.name} onChange={updateNewUser} /><br/><br/>
                Enter Age <input type="text" id="age" value={newEmployee.age} onChange={updateNewUser} /><br /><br />
                <input type="button" value="Add Employee" onClick={ addEmployee } />
            </div>
            
            <div>
                {employees.map(function(emp) {
                    return (
                         <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
                            <img src="https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Name: {emp.name}, Age: {emp.age}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" id={emp.name} onClick={deleteEmployee} value="Delete" />
                                <input type="button" id={emp.name} onClick={updateData} value="Delete" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}