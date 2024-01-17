import React from 'react'
import './CurrencyConverter.css';
import InputBox from './InputBox';

function CurrencyConverter() {
  return (
    <div className='background'>
    <div className='container'>
      <h1 className="heading" style={{marginTop:"50px"}}> Currency Converter</h1>
    </div>
    <div className='container'>
    <InputBox></InputBox>
    </div>

  </div>
  )
}

export default CurrencyConverter