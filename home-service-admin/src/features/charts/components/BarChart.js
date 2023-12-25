import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetQuantityStatistics } from 'store/actions';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({dateValue, isYearOnly}){
  const dispatch = useDispatch();
  const quantityStatistics = useSelector((state) => state.Admin.quantityStatistics)

  useEffect(() => {
    const startDate = new Date(dateValue.startDate);;

    if (startDate) {
      const year = startDate.getFullYear();

      const month = startDate.getMonth() + 1;
      if (isYearOnly) {
        dispatch(actionGetQuantityStatistics({ year }));
      } else {
        dispatch(actionGetQuantityStatistics({ month, year }));
      }
    }
  
}, [dispatch, dateValue, isYearOnly]);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = isYearOnly ? [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ] : quantityStatistics.map((item) => item[0]); 
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Store 1',
            data: isYearOnly? labels.map((month, monthIndex) => {
              const salesDataForMonth = quantityStatistics.find((item) => item[0] === monthIndex + 1);
              return salesDataForMonth ? salesDataForMonth[1] : 0;
            }) : labels.map((month, monthIndex) => {
              const salesDataForMonth = quantityStatistics.find((item) => item[0] === month);
              return salesDataForMonth ? salesDataForMonth[1] : 0;
            }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          // {
          //   label: 'Store 2',
          //   data: labels.map(() => { return Math.random() * 1000 + 500 }),
          //   backgroundColor: 'rgba(53, 162, 235, 1)',
          // },
        ],
      };

    return(
      <TitleCard title={"No of Orders"} topMargin="mt-2">
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart