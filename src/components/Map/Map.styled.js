import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  map: {
    flexGrow: 1,
    height: 500,
    backgroundColor: palette.white,
    padding: '1rem',
    borderRadius: 20,
    marginTop: 16,
    boxShadow: `0 0 8px -4px ${palette.black50}`,
    '& .leaflet-container': {
      height: '100%',
      borderRadius: 12,
    }
  },
  infoName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.emperor,
  },
  infoContainer: {
    width: 150,
  },
  infoFlag: {
    height: 80,
    width: '100%',
    backgroundSize: 'contain',
    borderRadius: 8,
  },
  infoConfirmed: {
    fontSize: 16,
    marginTop: 5,
  },
  infoRecovered: {
    fontSize: 16,
    marginTop: 5,
  },
  infoDeaths: {
    fontSize: 16,
    marginTop: 5,
  },
}));

export default useStyles;
