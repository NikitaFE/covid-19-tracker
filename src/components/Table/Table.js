import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';

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

Table.propTypes = {
  countries: PropTypes.array.isRequired,
};

Table.defaultProps = {
  countries: [],
}

export default Table;
