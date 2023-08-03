export default function EmployeeDetailsComponent(props) {
    return (
        <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
            <img src="https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg"
                className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Name: {props.employee.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}