import { useState } from "react";
export default function IncrementComponent() {
    var [userCount, setCount] = useState(10);
    var [userColor, setColor] = useState("green");
    var [filterText, setFilterText] = useState("");
    
    var userImg = "https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg";
    var [employees, setEmployees] = useState([{
        name: "TechnoFunnel",
        age: 30
    }, {
        name: "Mayank   ",
        age: 30
    }, {
        name: "Varun   ",
        age: 30
    }, {
        name: "Meha   ",
        age: 30
    }])
    
    var [filterEmployee, setFilterEmployees] = useState(employees)
    function increaseValue() {
        setCount(100)
        setCount(function(userCount) {
            return userCount + 1
        })
    }
    
    function updateFilter(event) {
        setFilterText(event.target.value)
        var newEmployeeList = employees.filter(function (employee) {
            if (employee.name.indexOf(event.target.value) > -1) {
                return true;
            }
            return false;
        })
        setFilterEmployees(newEmployeeList);
    }
    function deleteEmployee(event) {
        var newEmployeeList = employees.filter(function (employee) {
            if (employee.name != event.target.id) {
                return true;
            }
            return false;
        })
        setEmployees(newEmployeeList);
    }
    
    
    return (
        <div>
            <h1>Count: {userCount}</h1>
            {filterText}<br/>
            <input onChange={updateFilter} placeholder="Enter Employee" type="text" value={filterText} /><br/><br/>
            {filterEmployee.map(function (employee) {
                return (
                    <div className="card" style={{ width: "180px", color: userColor, display: "inline-block" }}>
                        <img src={userImg} className="card-img-top" alt="Technofunnel" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">Age: {employee.age} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" id={employee.name} className="btn btn-primary" onClick={deleteEmployee}>Delete</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}