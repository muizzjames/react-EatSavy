import { StyleSheet, PixelRatio, Platform } from 'react-native';
import Metrics from '../../../src/Metrics.js'
const deviceScreen = require('Dimensions').get('window')

export default StyleSheet.create({
    header: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight * 0.1,
      flexDirection: 'row',
    },
    wrapper: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      backgroundColor: 'white',
    },
    restaurantContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
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
    subheaderproduct: {
      width: '100%',
      height: Metrics.screenHeight * 0.5,
      backgroundColor: '#6edb7c',
      marginBottom: 16,
    },
    subhalfone: {
      flexDirection: 'row'
    },
    subhalftwo: {
      flexDirection: 'row',
    },
    pitapan: {
      color: '#fff',
      textAlign: 'left',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 26,
    },
    percent: {
      color: '#fff',
      textAlign: 'right',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 3,
      marginLeft: 8
    },
    textboxproduct: {
      width: 400,
      height: Metrics.screenHeight * 0.18,
      padding: 10,
      marginLeft: 15
    },
     name: {
      padding: 0,
      margin: 0,
      fontSize: 28,
      marginBottom: 3,
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
    },
    time: {
      margin:2,
      marginLeft: 0,
      marginRight: 0,
      padding:0,
      fontSize: 18,
      fontFamily: 'Iowan Old Style',
    },
    price: {
      margin:0,
      padding:0,
      color: '#5ed86e',
      marginTop: 5,
      fontSize: 20,
      fontFamily: 'Iowan Old Style',
    },
    orderbutton: {
      height: 60,
      marginHorizontal: 20,
      marginTop: 35,
      backgroundColor: '#6edb7c',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ordertext: {
      color: '#fff',
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold',
      fontSize: 26,
    },
    t2: {
      width: '100%',
      resizeMode: 'stretch'
    },
    dropdown: {
      borderWidth: 1,
      borderColor: '#d3d3d3',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    list: {
      marginLeft: 12,
      width: 100,
      marginTop: 10
    }

});
