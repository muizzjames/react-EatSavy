import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';

import { Container, Header, Title, Form, InputGroup, Input, Item, Label, Button, Spinner } from 'native-base';
import SudokuGrid from 'react-native-smart-sudoku-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';
import { openDrawer } from '@actions/drawer';
import images from '../../image.js';
import Styles from '../../Styles.js';
import styles from './styles';
import Colors from '../../Colors.js';
import Metrics from '../../Metrics.js'
import Product from '../Product';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import Constants from '@src/constants';

class Meals extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.onClickCell = this.onClickCell.bind(this);
  }
  onClickCell = (data,index) => {
    this.props.navigator.push({
      id: 'product',
      passProps: {
        meal: data,
        business: Constants.Businesses[data.business_id - 1],
      },
    });
  }
  _renderGridCell = (data, index) => {
    if (data.business_id !== this.props.business.id) return;
    return (
      <TouchableOpacity onPress={this.onClickCell.bind(this, data, index) }>
        <View style={styles.box}>
          <View style={styles.imagebox}>
            <Image source={images.tab}/>
          </View>
          <View style={styles.textbox}>
            <Text style={styles.name}>{data.meal_name}</Text>
            <Text style={styles.time}>{data.quantity} remaining</Text>
            <Text style={styles.time}>before {data.time_start}</Text>
            <Text style={styles.price}>£{data.cost.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _onBack = () => {
    this.props.navigator.pop();
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
    const businessInfo = this.props.business;
		return (
      <View style={styles.wrapper}>
        {navBar}
        <View style={styles.subheader}>
          <Text style={styles.pitapan}>{businessInfo.business_name}</Text>
          <MapView
            style={{flex: 1}}
            scrollEnabled={false}
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
                latitude: businessInfo.coordinate.latitude,
                longitude: businessInfo.coordinate.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0201,
            }}>
            <MapView.Marker
              key={businessInfo.id}
              coordinate={businessInfo.coordinate}
              image={Platform.OS === 'ios' ? null : images.marker}>
              {Platform.OS === 'ios' ? <Image source={images.marker} /> : <View/>}
              <MapView.Callout tooltip = {false} /*onPress= {()=>this.bubbleClick()}*/ underlayColor='#dddddd'/*style={styles.customView}*/>
                <View style={{alignItems: 'center', width: 140}}/*style={styles.calloutText}*/>
                    <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{businessInfo.business_name}</Text>
                    <Text style={{color: 'black', textAlign: 'center'}}>{businessInfo.address}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          </MapView>
        </View>
        <ScrollView style={{ backgroundColor: 'white' }}>
         <SudokuGrid
            columnCount={1}
            dataSource={Constants.Meals}
            renderCell={this._renderGridCell}
          />
        </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Meals);
