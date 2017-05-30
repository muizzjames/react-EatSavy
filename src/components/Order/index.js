import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Image, Platform } from 'react-native';
import styles from './styles';
import Styles from '../../Styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { replaceRoute, pushNewRoute, popRoute } from '@actions/route';
import { openDrawer } from '@actions/drawer';
import images from '../../image.js';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
class Order extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }
    markerClick() {
      console.log("Marker was clicked");
    }
    confirmClick() {
      this.props.replaceRoute('home');
    }
    _onBack = () => {
      this.props.popRoute();
    }
    render() {
      const navBar = (
        <View style={[Styles.navBarheader, {backgroundColor: 'white'}]}>
          <TouchableOpacity onPress={() => this.props.popRoute()} style={[Styles.menuIcon, { marginLeft: 10}]}>
            <Icon name="ios-arrow-back" style={{color: 'black', fontSize: 40}}/>
          </TouchableOpacity>
          <Image source={ images.logoGreenHoriz} style={Styles.logoMenu}/>
          <TouchableOpacity onPress={() => this.props.openDrawer()} style={Styles.menuIcon}>
            <Icon name="md-menu" style={{color: 'black', fontSize: 40}}/>
          </TouchableOpacity>
        </View>
      )
      const totalCost = this.props.count * this.props.meal.cost;
      return (
         <View style={styles.wrapper}>
            {navBar}
            <View style={styles.grid}>
              <View style={styles.grid1}>
                <Text style={{fontSize: 20, padding: 10, color: 'black', fontFamily: 'Iowan Old Style', fontWeight: 'bold'}}>ORDER SUMMARY</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.grid2}>
                  <Text style={styles.gridtext}>{this.props.meal.meal_name} * {this.props.count}</Text>
                </View>
                <View style={styles.grid3}>
                  <Text style={styles.gridtext}>£{this.props.meal.cost.toFixed(2)}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.grid4}>
                  <Text style={styles.gridtext}>Total</Text>
                </View>
                <View style={styles.grid5}>
                  <Text style={styles.gridtext}>£{totalCost.toFixed(2)}</Text>
                </View>
              </View>
            </View>
            <View style={styles.available}>
              <Text style={styles.av}>available before {this.props.meal.time_start} at:</Text>
            </View>
            <View style={styles.subheaderproduct}>
              <View style={styles.restaurantContainer}>
                <View style={styles.subhalfone}>
                  <Text style={styles.pitapan}>{this.props.business.business_name}</Text>
                </View>
                <View style={styles.subhalftwo}>
                  <Image source={images.thumb}/>
                  <Text style={styles.percent}>{this.props.business.rating}%</Text>
                </View>
              </View>
              <View style={styles.map}>
                <MapView
                  style={{flex: 1}}
                  provider={MapView.PROVIDER_GOOGLE}
                  scrollEnabled={false}
                  initialRegion={{
                    latitude: this.props.business.coordinate.latitude,
                    longitude: this.props.business.coordinate.longitude,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0201,
                  }}
                >
                  <MapView.Marker
                    key={this.props.business.id}
                    coordinate={this.props.business.coordinate}
                    image={Platform.OS === 'ios' ? null : images.marker}>
                    {Platform.OS === 'ios' ? <Image source={images.marker} /> : <View/>}
                    <MapView.Callout tooltip = {false} /*onPress= {()=>this.bubbleClick()}*/ underlayColor='#dddddd'/*style={styles.customView}*/>
                    <View style={{alignItems: 'center', width: 140}}/*style={styles.calloutText}*/>
                      <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{this.props.business.business_name}</Text>
                      <Text style={{color: 'black', textAlign: 'center'}}>{this.props.business.address}</Text>
                    </View>
                    </MapView.Callout>
                  </MapView.Marker>
                </MapView>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 15 }}>
              <TouchableWithoutFeedback onPress={() => this.confirmClick()}>
                <View style={styles.orderbutton}>
                  <Text style={styles.ordertext}>CONFIRM</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
        </View>
      );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    popRoute: () => dispatch(popRoute()),
    openDrawer: () => dispatch(openDrawer()),
  };
}
function mapStateToProps(state) {
  const routes = state.get('route');
  return { routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);
