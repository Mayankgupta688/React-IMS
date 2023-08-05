import axios from 'axios';
import { useState } from "react";
export default function AxiosStockDataComponent() {
    var baseURL = 'https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI';
    var [sbiStock, setSBIStock] = useState("0")
    function getStockData() {
        debugger;
        axios.get(baseURL).then(function (response) {
            setSBIStock(response.data.data.pricecurrent)
        })
    }
    
    return (
        <div>
            <h1>This is Stock Component {sbiStock}</h1>
            <input type='button' value="Get SBI Data" onClick={getStockData}></input>
        </div>
)
}