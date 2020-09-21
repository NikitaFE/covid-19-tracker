import { createMuiTheme } from '@material-ui/core/styles';

const white = '#ffffff';
const black30 = 'rgba(0, 0, 0, 0.3)';
const black50 = 'rgba(0, 0, 0, 0.5)';
const coralRed = '#fc3c3c';
const greenYellow = '#adff2f';
const red = '#ff0000';
const crimson = '#cc1034';
const pastelGreen = '#90ee90';
const paleSky = '#6c757d';
const emperor = '#555555';
const scorpion = '#6a5d5d';
const whisper = '#f3f2f8';

const theme = createMuiTheme({
  palette: {
    white,
    black30,
    black50,
    coralRed,
    greenYellow,
    red,
    crimson,
    pastelGreen,
    paleSky,
    emperor,
    scorpion,
    whisper,
  },
});

export default theme;
