import {Typography, Colors} from 'react-native-ui-lib';

export default () => {
  Colors.loadColors({
    pink: '#FF69B4',
    gold: '#FFD700',
    blue: '#FF0000'
  });
  
  Typography.loadTypographies({
    h1: {fontSize: 58, fontWeight: '300'},
    h2: {fontSize: 46, fontWeight: '300'},
    h3: {fontSize: 36, fontWeight: '300'},
    h4: {fontSize: 28, fontWeight: '300'},
    h5: {fontSize: 20, fontWeight: '300'},
    h6: {fontSize: 14, fontWeight: '300'},
    h1Bold: {fontSize: 20, fontWeight: '700'},
  });
}