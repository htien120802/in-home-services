import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"

import {v4 as uuidv4} from 'uuid'
import { useEffect } from "react"
import { actionGetTopSalesProvider } from "store/actions"
import { formatPriceWithCommas } from "utils"

function UserChannels({dateValue, isYearOnly}){
    const dispatch = useDispatch()
    const salesStatisticsByProvider = useSelector((state) => state.Admin.salesStatisticsByProvider)
    const quantityStatisticsByProvider = useSelector((state) => state.Admin.quantityStatisticsByProvider)
    const topSalesProvider = useSelector((state) => state.Admin.topSalesProvider)
    const topQuantityProvider = useSelector((state) => state.Admin.topQuantityProvider)

    useEffect(() => {
        const startDate = new Date(dateValue.startDate);;
  
        if (startDate) {
          const year = startDate.getFullYear();
  
          const month = startDate.getMonth() + 1;
          if (isYearOnly) {
            dispatch(actionGetTopSalesProvider({ year }));
          } else {
            dispatch(actionGetTopSalesProvider({ month, year }));
          }
        }
      
    }, [dispatch, dateValue, isYearOnly]);

    return(
        <TitleCard title={"Top Provider Sales"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Name</th>
                        <th className="normal-case">Sales</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        topSalesProvider.slice(0, 5).map((provider, index) => (
                            <tr key={uuidv4()}>
                            <td>{index +1}</td>
                            <td>{provider[1]} {provider[2]}</td>
                            <td>{formatPriceWithCommas(provider[3])}đ</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels