import React from 'react';
import numeral from 'numeral';

import './Table.css';

function Table({ countries }) {
  return (
    <table className="table">
      <tbody className="table__body">
        {countries.map(({ country, cases }) => (
          <tr key={country}>
            <td>{country}</td>
            <td>
              <strong>
                {numeral(cases).format("0,0")}
              </strong>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;
