// DynamicTable.js

import React from 'react';
import './DataTable.css'; // Import the CSS file

// const DynamicTable = ({ data }) => {
const DataTable = () => {

    const data = [
        {
            accountType:"accountType1",
            accountNumber : "accountNumber1",
            balance : 1000,
            lastTransactionDate : "JAN",
            progress: 12
        },
        {
            accountType:"accountType2",
            accountNumber : "accountNumber2",
            balance : 2000,
            lastTransactionDate : "FEB",
            progress: 24
        },
        {
            accountType:"accountType3",
            accountNumber : "accountNumber3",
            balance : 3000,
            lastTransactionDate : "MAR",
            progress: 36
        },
        {
            accountType:"accountType4",
            accountNumber : "accountNumber4",
            balance : 4000,
            lastTransactionDate : "APR",
            progress: 50
        }
    ]

  return (
    <div className='table-container'>
    <div className='table-title'>ICE-CONTROLS</div>
    <div>Control</div>
    <table className="dynamic-table">
      <thead>
        <tr>
          <th>Account Type</th>
          <th>Account Number</th>
          <th>Balance</th>
          <th>Last Transaction Date</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.accountType}</td>
            <td>{row.accountNumber}</td>
            <td>{row.balance}</td>
            <td>{row.lastTransactionDate}</td>
            <td>
              <div className="progress-bar" style={{ width: row.progress }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataTable;
