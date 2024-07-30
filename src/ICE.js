// ScrollableTable.js

import React from 'react';
import './Ice.css'; // Import your CSS file

function Ice() {
  return (
    <>
    <div className="scrollable-table">
      <table>
        <thead>
          <tr>
            <th>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frozen yoghurt</td>
            <td>159</td>
            <td>6</td>
            <td>24</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Ice;
