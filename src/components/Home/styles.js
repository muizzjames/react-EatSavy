import { StyleSheet, PixelRatio } from 'react-native';
const deviceScreen = require('Dimensions').get('window')
import Styles from '@src/Styles';
import Metrics from '@src/Metrics';
export default StyleSheet.create({
  map: {
      flex: 1,
  },
  controlPanel: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  switchButton: {
    ...Styles.center,
    height: 50,
    borderColor: '#5ED862',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#5ED862',
    fontSize: 25,
    fontWeight: 'bold',
  },
  zoom: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    width: 40,
    height: 80,
  },
  zoomSeperate: {
    marginTop: 7,
    backgroundColor: 'lightgrey',
    height: 1,
    width: 20
  },
  zoomButtonPlus: {
    fontSize: 20,
    color: 'black'
  },
  zoomButtonMinus: {
    fontSize: 27,
    color: 'black'
  },

  wrapper: {
    flex: 1,
  },
  subheader: {
    backgroundColor: '#6edb7c',
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
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 24,
    marginBottom: 3,
    fontFamily: 'Iowan Old Style',
    fontWeight: 'bold'
  },
  restaurant: {
    fontSize: 18,
    marginBottom: 3,
    fontFamily: 'Iowan Old Style',
    fontWeight: 'bold'
  },
  time: {
    fontSize: 16,
    fontFamily: 'Iowan Old Style'
  },
  price: {
    margin:0,
    padding:0,
    color: '#5ed86e',
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Iowan Old Style'
  },
  time: {
    fontSize: 14,
    fontFamily: 'Iowan Old Style',
  }
});
