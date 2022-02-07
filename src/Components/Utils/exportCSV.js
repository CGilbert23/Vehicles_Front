import React from 'react'
import { CSVLink } from 'react-csv'

export const ExportReactCSV = ({csvData, fileName}) => {
    return (
        <button className='export'>
            <CSVLink data={csvData} filename={fileName}>Export All Data</CSVLink>
        </button>
    )
}


export default ExportReactCSV