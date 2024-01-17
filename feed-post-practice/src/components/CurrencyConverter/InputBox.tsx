import React, { useState } from 'react'
import './inputBox.css'

function InputBox() {
    let [amount,setAmount] = useState(0)
    const [currencyType, setCurrencyType] = useState('USD')
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [convertCurrencyTo, setConvertCurrencyTo] = useState('INR')

    const swapAmount = ()=>{
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }
  return (
    <>
        <div className='card p-3 m-3 w-50 transparent-card'>
            <div className='card m-2 p-3'>
                <div className="row">
                    <div className="col-8">
                        <label className='label'>from:</label>
                        <br></br>
                        <input value = {amount} style={{width:"-webkit-fill-available"}} onChange={(e)=>{setAmount(Number(e.target.value))}}></input>
                    </div>
                    <div className="col-4">
                        <label className='heading'>Currency Type</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div> 
            <div className="swap-btn">
               <button className='btn btn-primary swap-button' onClick={swapAmount}>Swap</button>
            </div>
            <div className='card m-2 p-3'>
                <div className="row">
                    <div className="col-8">
                        <label className='label'>To:</label>
                        <br></br>
                        <input value = {convertedAmount} style={{width:"-webkit-fill-available"}} onChange={(e)=>{setConvertedAmount(Number(e.target.value))}}></input>
                    </div>
                    <div className="col-4">
                        <label className='heading'>Currency Type</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div> 
            <button className='btn btn-primary m-2 p-2'>Convert</button>
        </div>
    </>
  )
}

export default InputBox