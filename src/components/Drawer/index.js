import React, { Component } from 'react';
import {
    TouchableHighlight,
    SwitchIOS,
    View,
    Text,
    TouchableOpacity,
    Navigator,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { replaceRoute, pushNewRoute } from '@actions/route';
import { closeDrawer } from '@actions/drawer';

import { Container, Form, Item, Label, Button } from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import Modal from 'react-native-simple-modal';
import Styles from '../../Styles.js';
import styles from './styles';
import images from '../../image.js'
import Constants from '@src/constants';
class ControlPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
    this.onPressYes = this.onPressYes.bind(this);
  }
  componentWillMount() {
    this.setState({ open: false });
  }
  onPressNo = () => {
    this.setState({
      open: false,
    })
  }

  onPressYes = () => {
    this.props.closeDrawer();
    this.setState({ open: false });
    this.props.replaceRoute('login');
  }

  orderClick = () => {
    this.props.closeDrawer();
    this.props.navigator.replace({
      id: 'order',
      passProps: {
        meal: Constants.Meals[0],
        business: Constants.Businesses[0],
        count: 1,
      }
    });
  }

  render() {
    return (
      <View style={styles.controlPanel}>
          <View style={{flexDirection: 'row'}}>
              <Image source={images.logoGreenHoriz} style={{marginLeft: 32, marginTop: 25, width:200, height:100, resizeMode:'contain'}}/>
              <TouchableOpacity style={{marginTop: 50, backgroundColor: 'transparent', marginRight: 15}} onPress = {this.props.closeDrawer}>
                <Icon
                    name="close-o"
                    size={50}
                    style={{marginLeft: 80}}
                    />
              </TouchableOpacity>
          </View>

          <Text onPress={()=>this.orderClick()} style={{marginLeft: 35, fontFamily: 'Iowan Old Style', textDecorationLine: 'underline', fontSize: 40, color:'black', padding: 5}}>Orders</Text>
          <Text style={{marginLeft: 35, fontFamily: 'Iowan Old Style', textDecorationLine: 'underline', fontSize: 40, marginTop: 20, color:'black'}}>Settings</Text>
          <Text onPress={()=>this.setState({open: true})} style={{marginLeft: 35, fontFamily: 'Iowan Old Style', textDecorationLine: 'underline', fontSize: 40, marginTop: 20, color:'black'}}>Logout</Text>

          <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => this.setState({open: false})}
            style={{alignItems: 'center', width: 100, height: 50}}>
            <Text style={{textAlign:'center', marginTop: 10, fontSize: 15}}>Are you sure you want to log out?</Text>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Button block success onPress={this.onPressNo} style={{width: 50, height: 35, marginLeft: 20, marginTop: 5, flex: 1}}>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>No</Text>
            </Button>
            <Button block success onPress={() => this.onPressYes()} style={{width: 50, height: 35, marginLeft: 20, marginTop: 5, flex: 1, marginRight:20}}>
                <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Yes</Text>
            </Button>
            </View>
          </Modal>
      </View>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    closeDrawer: () => dispatch(closeDrawer()),
  };
}
function mapStateToProps(state) {
  const routes = state.get('route');
  return { routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
