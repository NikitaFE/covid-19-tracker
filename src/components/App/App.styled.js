import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 20,
    '& @media (max-width: 990px)': {
      flexDirection: 'column',
    },
  },
  appLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.9,
    marginBottom: 20,
  },
  appRight: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    '& .MuiCardContent-root': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
  },
  appTableTitle: {
    marginBottom: 15,
  },
  appGraphTitle: {
    marginBottom: 15,
  },
  appGraph: {
    flexGrow: 1,
  },
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    '& > h1': {
      color: '#fc3c3c',
      fontSize: '2rem',
    },
  },
  appDropdown: {
    backgroundColor: '#ffffff',
  },
  appStats: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
