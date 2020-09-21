import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  table: {
    width: '100%',
    marginBottom: 20,
    color: '#6a5d5d',
    borderCollapse: 'collapse',
  },
  tableBody: {
    display: 'block',
    height: 400,
    overflow: 'auto',
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:nth-of-type(odd)': {
      backgroundColor: '#f3f2f8',
    },
  },
  tableData: {
    padding: '0.5rem',
  },
}));

export default useStyles;
