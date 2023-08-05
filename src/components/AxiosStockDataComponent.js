import axios from 'axios';
import { useEffect, useState } from "react";
export default function AxiosStockDataComponent() {
    var baseURL = 'https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI';
    var [sbiStock, setSBIStock] = useState(0);
    var [nalco, setNalcoStock] = useState(0);
    
    useEffect(function () {
        console.log("Once in Lifetime")
        setInterval(function () {
            setNalcoStock(function (nalco) {
                return nalco + 1;
            });
            
            setSBIStock(function (sbiStock) {
                return sbiStock + 2;
            });
        }, 1000)
    }, []);
    
    useEffect(function () {
        console.log("SBI Updated")
    }, [sbiStock])
    
    useEffect(function () {
        console.log("Nalco Updated")
    }, [nalco])
    
    
    function getStockData() {
        debugger;
        axios.get(baseURL).then(function (response) {
            alert('Stock Data retrived');
        })
    }
    
    const getStockDataArrowFunc = () => {
         debugger;
        axios.get(baseURL).then( (response)=> {
            alert('Stock Data retrived');
        })
    }
    
    return (
        <div>
            <h1>This is Stock Component {sbiStock}</h1>
            <h2>Nalco: {nalco}</h2>
            <input type='button' value="Get SBI Data" onClick={getStockData}></input>
        </div>
    )
}