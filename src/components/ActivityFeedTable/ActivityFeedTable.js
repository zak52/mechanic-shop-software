import React, { useMemo } from "react";
import { useTable } from 'react-table';
import { COLUMNS } from "./COLUMNS";
import './ActivityFeedTable.css';
export const ActivityFeedTable = () => {
    
    const columns = useMemo(() => COLUMNS, [])

    //const data = useMemo(() => '', [])
   
    //const tableInstance = useTable({
      //  columns,
   // })



    return (
        <table className="activityFeedTable">
            <thead>
                <tr>
                    <th>
                        User
                    </th>
                    <th>
                        Transaction
                    </th>
                    <th>
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Service Writer
                    </td>
                    <td>
                        Updated Job Order
                    </td>
                    <td>
                        12/22/2022
                    </td>
                </tr>
                <tr>
                    <td>
                        Service Writer
                    </td>
                    <td>
                        Updated Job Order
                    </td>
                    <td>
                        12/22/2022
                    </td>
                </tr>
                <tr>
                    <td>
                        Service Writer
                    </td>
                    <td>
                        Updated Job Order
                    </td>
                    <td>
                        12/22/2022
                    </td>
                </tr>
                <tr>
                    <td>
                        Service Writer
                    </td>
                    <td>
                        Updated Job Order
                    </td>
                    <td>
                        12/22/2022
                    </td>
                    
                </tr>
            </tbody>
        </table>
    )
}