import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"

import {v4 as uuidv4} from 'uuid'
import { useEffect } from "react"
import { actionGetTopQuantityProvider } from "store/actions"

function UserChannels({dateValue, isYearOnly}){
    const dispatch = useDispatch()
    const topQuantityProvider = useSelector((state) => state.Admin.topQuantityProvider)

    useEffect(() => {
        const startDate = new Date(dateValue.startDate);;
  
        if (startDate) {
          const year = startDate.getFullYear();
  
          const month = startDate.getMonth() + 1;
          if (isYearOnly) {
            dispatch(actionGetTopQuantityProvider({ year }));
          } else {
            dispatch(actionGetTopQuantityProvider({ month, year }));
          }
        }
      
    }, [dispatch, dateValue, isYearOnly]);

    return(
        <TitleCard title={"Top Provider Number Of Booking"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Name</th>
                        <th className="normal-case">Bookings</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        topQuantityProvider.slice(0, 5).map((provider, index) => (
                            <tr key={uuidv4()}>
                            <td>{index +1}</td>
                            <td>{provider[1]} {provider[2]}</td>
                            <td>{provider[3]}</td>
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