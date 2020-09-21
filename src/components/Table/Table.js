import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';

import useStyles from './Table.styled.js';

const Table = ({ countries }) => {
  const classes = useStyles();

  return (
    <table className={classes.table}>
      <tbody className={classes.tableBody}>
        {countries.map(({ country, cases }) => (
          <tr className={classes.tableRow} key={country}>
            <td className={classes.tableData}>{country}</td>
            <td className={classes.tableData}>
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
