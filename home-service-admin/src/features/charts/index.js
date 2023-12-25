import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart'
import StackBarChart from './components/StackBarChart'
import Datepicker from "react-tailwindcss-datepicker"; 
import { useState } from 'react'




function Charts(){

    const [dateValue, setDateValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date() 
    }); 
    const [isYearOnly, setIsYearOnly] = useState(false);
    
    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setDateValue(newValue); 
    } 

    const handleCheckboxChange = () => {
        setIsYearOnly(!isYearOnly);
    };    

    return(
        <>
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
        {/** ---------------------- Different charts ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
                <StackBarChart dateValue={dateValue} isYearOnly={isYearOnly}/>
                <BarChart dateValue={dateValue} isYearOnly={isYearOnly}/>
            </div>

        
            {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <DoughnutChart />
                <PieChart />
            </div>

            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <ScatterChart />
                <LineChart />
            </div> */}
        </>
    )
}

export default Charts