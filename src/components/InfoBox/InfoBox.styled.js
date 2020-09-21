import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  infoBox: {
    flex: 1,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: `0 3px 10px ${palette.black30}`,
    },
    '&:not(:last-child)': {
      marginRight: 15,
    },
  },
  infoBoxSelected: {
    borderTop: `10px solid ${palette.greenYellow}`,
  },
  infoBoxRed: {
    borderColor: palette.red,
  },
  infoBoxCases: {
    color: palette.crimson,
    fontWeight: '600',
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  infoBoxCasesGreen: {
    color: palette.pastelGreen,
  },
  infoBoxTotal: {
    color: palette.paleSky,
    fontWeight: '700',
    fontSize: '0.8rem',
    marginTop: 15,
  },
}));

export default useStyles;
