import { useState } from "react";
export default function EmployeeAddComponent() {
    
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
        }]);
    
    var [employeeObject, setEmployeeObject] = useState({
        name: 'AAA',
        age: '20',
        address: "Rohini",
        mail: "abc@gmail.com"
    });
    
    function updateText(event) {
        debugger;
        setEmployeeObject({
            ...employeeObject,
            [event.target.id]: event.target.value
        })
    }
    
    const onUpdateEmployee = () => {
        debugger;
        setEmployees(function (employees) {
            debugger;
            employees = [
                ...employees,
                employeeObject
            ]
            return employees;
        })
    }
    return (
        <div>
            
            <input type="text"  id="name" placeholder="Enter Name" value={employeeObject.name} onChange={updateText} /><br/><br/>
            <input type="text" id="age" placeholder="Enter Age" value={employeeObject.age} onChange={updateText} /><br/><br/>
            <input type="button" value='Update Employee' onClick={onUpdateEmployee}/><br/><br/>
            {employees.map(function(employee) {
                return (
                    <div className="card" style={{ width: "180px", color: "red", display: "inline-block" }}>
                        <img className="card-img-top" src="https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg" alt="Technofunnel" />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">Age: {employee.age} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" id={employee.name} className="btn btn-primary">Delete</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}