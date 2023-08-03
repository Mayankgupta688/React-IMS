export default function EmployeeComponent() {
    var employees = [
        { name: "Mayank", age: 10 },
        { name: "Anshul", age: 31 },
        { name: "Ankit", age: 38 },
        { name: "Varun", age: 31 },
        {name: "TechnoFunnel", age: 43}
    ]
    var filteredList = employees.filter(function (emp) {
        if (emp.age % 2 == 0) {
            return true
        } else {
            return false;
        }
    })
    
    return (
        <div>
            {
                employees.map(function (emp) {
                    return (
                        <div>
                            <h2>Employee Name is {emp.name}</h2>
                            <h3>Employee Name is {emp.age   }</h3><hr/>
                        </div>
                    )
                })
            }
            <h1>This is Employee Filter List:</h1>  
            {
                filteredList.map(function (emp) {
                    return (
                        <div>
                            <h2>Employee Name is {emp.name}</h2>
                            <h3>Employee Name is {emp.age}</h3>
                            <input type="button" value="Click to Get Name" /><hr />
                        </div>
                    )
                })
            }
        </div>
    )
}