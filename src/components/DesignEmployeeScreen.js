import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

export default function DesignEmployeeScreen(props) {
    
    var employeeArray = [{
        name: "A1 Khera",
        age: 20
    }, {
        name: "A2 Khera",
        age: 20
    }]

    return (
        <>
            <h1>These are my Employees</h1>
            <h2>Welcome to TechnoFunnel</h2>
            {employeeArray.map(function(employee) {
                return (
                    <EmployeeDetailsComponent employee={employee}></EmployeeDetailsComponent>
                )
            })}
            
        </>
    )
}