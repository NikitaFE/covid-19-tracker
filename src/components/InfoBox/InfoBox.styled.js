import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  infoBox: {
    flex: 1,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
    },
    '&:not(:last-child)': {
      marginRight: 15,
    },
  },
  infoBoxSelected: {
    borderTop: '10px solid greenyellow',
  },
  infoBoxRed: {
    borderColor: 'red',
  },
  infoBoxCases: {
    color: '#cc1034',
    fontWeight: '600',
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  infoBoxCasesGreen: {
    color: 'lightgreen',
  },
  infoBoxTotal: {
    color: '#6c757d',
    fontWeight: '700',
    fontSize: '0.8rem',
    marginTop: 15,
  },
}));

export default useStyles;
