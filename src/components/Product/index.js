import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

import { Container, Header, Title, Form, InputGroup, Input, Item, Label, Button, Spinner } from 'native-base';
import images from '../../image.js';
import Styles from '../../Styles.js';
import styles from './styles';
import Colors from '../../Colors.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';
import { openDrawer } from '@actions/drawer';
import { connect } from 'react-redux';
import Metrics from '../../Metrics.js'
import Modal from 'react-native-simple-modal';
import ModalDropDown from 'react-native-modal-dropdown'
import Constants from '@src/constants';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state={
      feet: 1,
    }
  }
  _onBack = () => {
      this.props.navigator.pop();
  }
  onPressOrder = () => {
    this.props.navigator.push({
      id: 'order',
      passProps: {
        business: this.props.business,
        meal: this.props.meal,
        count: this.state.feet,
      },
    });
  }
  onGotoMeal() {
    this.props.navigator.replace({
      id: 'meals',
      passProps: {
        business: this.props.business,
      },
    });
  }
  onPressNo = () => {
    this.setState({
      open: false,
      feet: 1,
    })
  }
  onPressYes = () => {
    this.setState({
      open: false,
    })
    this.onPressOrder()
  }
	render() {
    const navBar = (
      <View style={[Styles.navBarheader, {backgroundColor: 'white'}]}>
        <TouchableOpacity onPress={() => this.props.popRoute()} style={[Styles.menuIcon, {marginLeft: 10}]}>
          <Icon name="ios-arrow-back" style={{color: 'black', fontSize: 40}}/>
        </TouchableOpacity>
        <Image source={ images.logoGreenHoriz} style={Styles.logoMenu}/>
        <TouchableOpacity onPress={() => this.props.openDrawer()} style={Styles.menuIcon}>
          <Icon name="md-menu" style={{color: 'black', fontSize: 40}}/>
        </TouchableOpacity>
      </View>
    )
    let mealCounts = [];
    for ( let i = 1; i <= this.props.meal.quantity; i++ ) {
      mealCounts.push(i);
    }
		return (
      <View style={styles.wrapper}>
        {navBar}
        <View style={styles.subheaderproduct}>
          <View style={styles.restaurantContainer}>
            <TouchableOpacity style={styles.subhalfone} onPress={() => this.onGotoMeal()}>
              <Text style={styles.pitapan}>{this.props.business.business_name}</Text>
            </TouchableOpacity>
            <View style={styles.subhalftwo}>
              <Image source={images.thumb} style={{ resizeMode: 'stretch' }}/>
              <Text style={styles.percent}>{this.props.business.rating}%</Text>
            </View>
          </View>
          <Image source={images.t2} style={styles.t2}/>
        </View>
        <View style={styles.textboxproduct}>
          <Text style={styles.name}>{this.props.meal.meal_name}</Text>
          <Text style={styles.time}>{this.props.meal.quantity} remaining </Text>
          <Text style={styles.time}>before {this.props.meal.time_start}</Text>
          <Text style={styles.price}>£{this.props.meal.cost.toFixed(2)}</Text>
        </View>
        <TouchableWithoutFeedback onPress={()=>this.setState({open: true})}>
          <View style={styles.orderbutton}>
            <Text style={styles.ordertext}>ORDER</Text>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          offset={0}
          open={this.state.open}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({open: false})}
          >
          <Text style={{textAlign:'center', marginTop: 10, fontSize: 15}}>{this.props.meal.quantity} meals available. How many do you want?</Text>
          <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
            <ModalDropDown style={styles.dropdown}
              dropdownStyle={styles.list}
              options={mealCounts} onSelect={(index, value)=>this.setState({feet:value})} textStyle={{fontSize:15,padding:10}}/>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Button block success onPress={this.onPressNo} style={{width: 50, height: 35, marginLeft: 20, marginTop: 5, flex: 1}}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>CANCEL</Text>
            </Button>
            <Button block success onPress={this.onPressYes} style={{width: 50, height: 35, marginLeft: 20, marginTop: 5, flex: 1, marginRight:20}}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>OK</Text>
            </Button>
          </View>
        </Modal>
      </View>
		);
	}
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    popRoute: () => dispatch(popRoute()),
    openDrawer: () => dispatch(openDrawer()),
  };
}
function mapStateToProps(state) {
  const routes = state.get('route');
  return { routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
