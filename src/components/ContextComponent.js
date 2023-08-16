export default function ComponentParent() {
    var [data, setData] = useState({
        name: "Mayank",
        age: 10
    })
    
    return (
        <div>
            <h1>This is Parent Component</h1>
            <ChildComponent></ChildComponent>
        </div>
    )
}

function ChildComponent() {
    return (
        <div>
            <h2>This is Child Component</h2>
            <GrandChild></GrandChild>
        </div>
    )
}

function GrandChild() {
    return (
        <div>
            <h2>This is Grand Child Component</h2>
        </div>
    )
}