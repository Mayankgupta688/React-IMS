import { useState } from "react";
import ChildComponent from "./ChildComponent";
export default function ParentComponent() {
    var [employees, setEmployee] = useState([
        { name: "Mayank", age: 10 },
        { name: "Varun", age: 10 }
    ])
    
    function deleteEmployeeFromMasterList(employeeName) {
        var newArray = employees.filter(function (employee) {
            return employee.name != employeeName
        });
        
        setEmployee(newArray);
    }
    
    return (
        <div>
            {employees.map((employee) => {
                return (
                    <ChildComponent
                        deleteEmployeeFromMasterList={deleteEmployeeFromMasterList}
                        employee={employee}></ChildComponent>
                )
            })}
        </div>
    )
}