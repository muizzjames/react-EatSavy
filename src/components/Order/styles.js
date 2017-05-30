import { StyleSheet, PixelRatio } from 'react-native';
const deviceScreen = require('Dimensions').get('window');
import Metrics from '../../../src/Metrics.js'

export default StyleSheet.create({
    wrapper: {
      width: Metrics.screenWidth,
      height: Metrics.screenHeight,
      backgroundColor: 'white',
    },
    header: {
      width: Metrics.screenWidth,
      height: 80,
      flexDirection: 'row',
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
    gridtext: {
        fontSize: 18,
        padding: 10,
        color: 'black',
        fontFamily: 'Iowan Old Style',
        fontWeight: 'bold',
    },
    grid: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: Metrics.screenHeight * 0.27,
    },
    grid1: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 306,
      height: 53,
      borderWidth: 2,
      borderColor: 'black',
      padding: 10
    },
    grid2: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 202,
	    height: 53,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'black',
      padding: 13
    },
    grid3: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 104,
      height: 53,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'black',
      padding: 13
    },
    grid4: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 202,
      height: 53,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'black',
      paddingTop: 13,
      paddingBottom: 17
    },
    grid5: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 104,
      height: 53,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'black',
      paddingTop: 13,
      paddingBottom: 17
    },
    available: {
      width: Metrics.screenWidth,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
    },
    av: {
      margin: 0,
      padding: 0,
      fontSize: 18,
      fontFamily: 'Iowan Old Style',
      fontWeight: 'bold'
    },
    subheaderproduct: {
      width: '100%',
      height: Metrics.screenHeight * 0.4,
      backgroundColor: '#6edb7c',
    },
    subhalfone: {
      flexDirection: 'row'
    },
    restaurantContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
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
    map: {
        flex: 1,
    },
    orderbutton: {
      height: 60,
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
});
