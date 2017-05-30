import { StyleSheet, PixelRatio, Platform } from 'react-native';
import Metrics from '../../../src/Metrics.js'
const deviceScreen = require('Dimensions').get('window')

export default StyleSheet.create({
    wrapper: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
    },
    header: {
      width: Metrics.screenWidth,
      height: 80,
      flexDirection: 'row',
    },
    subheader: {
      height: 260,
      backgroundColor: '#6edb7c',
    },
    left: {
      margin: 28
    },
    logo: {
      width: 113,
      height: 90,
      resizeMode: 'contain',
      marginLeft: 66
    },
    pitapan: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 26,
      margin: 0,
      marginTop: 17,
      marginBottom: 17
    },
    box: {
      width: Metrics.screenWidth,
      height: 150,
      backgroundColor: '#fff',
      margin: 10,
      marginBottom: 0,
      flexDirection: 'row'
    },
    imagebox: {
      width: 150,
	    height: 150
    },
    textbox: {
      paddingHorizontal: 10,
    },
    name: {
      padding: 0,
      margin: 0,
      fontSize: 28,
      marginBottom: 3,
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold'
    },
    time: {
      margin:2,
      marginLeft: 0,
      marginRight: 0,
      padding:0,
      fontSize: 18,
      fontFamily: 'Iowan Old Style'
    },
    price: {
      margin:0,
      padding:0,
      color: '#5ed86e',
      marginTop: 5,
      fontSize: 20,
      fontFamily: 'Iowan Old Style'
    }
});
