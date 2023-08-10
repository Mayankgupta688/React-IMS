export default function ChildComponent(props) {
    
    function deleteEmployee(employee) {
        debugger;
        alert("Employee Deleted: " + employee.name)
        props.deleteEmployeeFromMasterList(employee.name)
    }
    
    function deleteEmployeeWithEvent(event) {
        debugger;
        props.deleteEmployeeFromMasterList(event.target.id)
    }
    
    return (
         <div>
            <h1>User Name is {props.employee.name}</h1>
            <h2>User Age is {props.employee.age}</h2>
            
            <input id={props.employee.name}
                type="button" value="Delete With Event"
                onClick={deleteEmployeeWithEvent} />
            
            <input
                type="button" value="Delete"
                onClick={function a() {
                    deleteEmployee(props.employee);
                }} /><br /><hr />
            <input
                type="button" value="Delete Directly"
                onClick={props.deleteEmployeeFromMasterList(props.employee.name)} /><br /><hr/>
        </div>
    )
}