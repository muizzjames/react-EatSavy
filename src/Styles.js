import { Platform } from 'react-native';

import Metrics from './Metrics';



const Styles = {
  fullScreen: {
    width: Metrics.screenWidth,
    ...Platform.select({
      ios: {
        paddingBottom: 0,
        height: Metrics.screenHeight,
      },
      android: {
        paddingBottom: 0,
        height: Metrics.screenHeight + 24,
      },
    }),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarheader: {
    flexDirection: 'row',
    height: '12%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logoMenu: {
    width: 150,
    resizeMode: 'contain',
  },
  menuIcon: {
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
  }
};

export default Styles;
