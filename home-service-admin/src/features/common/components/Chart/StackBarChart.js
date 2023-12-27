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
  import TitleCard from '../../../../components/Cards/TitleCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetSalesStatisticsByProvider } from 'store/actions';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  function StackBarChart({dateValue, isYearOnly, id }){
    const dispatch = useDispatch();
    const salesStatistics = useSelector((state) => state.Admin.salesStatisticsByProvider)
    
    useEffect(() => {
      const startDate = new Date(dateValue.startDate);;

      if (startDate) {
        const year = startDate.getFullYear();

        const month = startDate.getMonth() + 1;
        if (isYearOnly) {
          dispatch(actionGetSalesStatisticsByProvider({ providerId: id, year }));
        } else {
          dispatch(actionGetSalesStatisticsByProvider({ providerId: id, month, year }));
        }
      }
    
  }, [dispatch, dateValue, isYearOnly, id]);
  
      const options = {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        };
        
        const labels = isYearOnly ? [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ] : salesStatistics.map((item) => item[0]); 
        
        const data = {
          labels,
          datasets: [
            {
              label: 'Store 1',
              data: isYearOnly? labels.map((month, monthIndex) => {
                const salesDataForMonth = salesStatistics.find((item) => item[0] === monthIndex + 1);
                return salesDataForMonth ? salesDataForMonth[1] : 0;
              }) : labels.map((month, monthIndex) => {
                const salesDataForMonth = salesStatistics.find((item) => item[0] === month);
                return salesDataForMonth ? salesDataForMonth[1] : 0;
              }),
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            // {
            //   label: 'Store 2',
            //   data: labels.map(() => { return Math.random() * 1000 + 500 }),
            //   backgroundColor: 'rgba(53, 162, 235, 1)',
            // },
            // {
            //     label: 'Store 3',
            //     data: labels.map(() => { return Math.random() * 1000 + 500 }),
            //     backgroundColor: 'rgba(235, 162, 235, 1)',
            //   },
          ],
        };
  
      return(
        <TitleCard title={"Sales"} topMargin="mt-2">
              <Bar options={options} data={data} />
        </TitleCard>
  
      )
  }
  
  
  export default StackBarChart