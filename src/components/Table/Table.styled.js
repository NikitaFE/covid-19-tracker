import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  table: {
    width: '100%',
    marginBottom: 20,
    color: palette.scorpion,
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
      backgroundColor: palette.whisper,
    },
  },
  tableData: {
    padding: '0.5rem',
  },
}));

export default useStyles;
