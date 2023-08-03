export default function FooterComponent(props) {
    debugger;
    return (
        <div>
            <h3>
                Thank you, Visit Again {props.details.name} {props.userAge}
                Random: {Math.floor(Math.random() * 100) + 100}
            </h3>
        </div>
    )
}