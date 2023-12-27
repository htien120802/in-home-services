import StackBarChart from './Chart/StackBarChart'
import BarChart from './Chart/BarChart'
import React from 'react'
import Datepicker from "react-tailwindcss-datepicker"; 
import { useState } from 'react'

const ProviderStatisticsModalBody = ({ closeModal, extraObject }) => {
    const [dateValue, setDateValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date() 
    }); 
    const [isYearOnly, setIsYearOnly] = useState(false);
    
    const handleDatePickerValueChange = (newValue) => {
        setDateValue(newValue); 
    } 

    const handleCheckboxChange = () => {
        setIsYearOnly(!isYearOnly);
    };  

  return (
    <>
      <p className="text-xl mt-8 text-center">Provider Statistics:</p>

      <Datepicker 
                useRange={false} 
                asSingle={true} 
                value={dateValue} 
                onChange={handleDatePickerValueChange} 
                displayFormat={isYearOnly ? 'YYYY' : 'MM/YYYY'}
            /> 

<div className="mt-4">
        <label>
          <input
            type="checkbox"
            checked={isYearOnly}
            onChange={handleCheckboxChange}
          />
          {' '}Show Year Only
        </label>
      </div>

      <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
                <StackBarChart dateValue={dateValue} isYearOnly={isYearOnly} id={extraObject.id}/>
                <BarChart dateValue={dateValue} isYearOnly={isYearOnly} id={extraObject.id}/>
            </div>
    </>
  )
}

export default ProviderStatisticsModalBody