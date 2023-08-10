import AxiosStockDataComponent from "../AxiosStockDataComponent";
import DesignEmployeeScreen from "../DesignEmployeeScreen";

function higherOrderComponent(SomeComponent, OtherComponent) {
    return function NewComponent() {
        
        return (
            <div style={{border: "10px solid red", padding: "20px", margin: "10px"}}>
                <h1>Hello World...</h1>
                <OtherComponent></OtherComponent>
                <AxiosStockDataComponent></AxiosStockDataComponent>
                <DesignEmployeeScreen></DesignEmployeeScreen>
                <SomeComponent></SomeComponent>
            </div>
        )
    }
}

function ComponentTwo() {
    return <h1>This is Component Two</h1>
}

function ComponentOne() {
    return <h1>This is Component One</h1>
}
function ComponentThree() {
    return <h1>This is Component Three</h1>
}

export var NewComponentOne = higherOrderComponent(ComponentOne, ComponentTwo)
export var NewComponentTwo = higherOrderComponent(ComponentThree, ComponentTwo)

