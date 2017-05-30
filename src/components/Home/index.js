import React, {Component} from 'React';
import { ScrollView, View, TouchableOpacity, Text, Image, Platform } from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { replaceRoute, pushNewRoute } from '@actions/route';
import { closeDrawer, openDrawer } from '@actions/drawer';
import Constants from '@src/constants';
import MapView from 'react-native-maps';
import SudokuGrid from 'react-native-smart-sudoku-grid';
import images from '../../image.js'
import styles from './styles';
import Styles from '@src/Styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      switchView: false,
    }
  }
  bubbleClick(business) {
    this.props.navigator.push({
      id: 'meals',
      passProps: {
        business,
      },
    });
  }
  onSwitchContainer() {
    this.setState({ switchView: !this.state.switchView});
  }
  onClickCell = (data, index) => {
     this.props.navigator.push({
        id: 'product',
        passProps: {
          meal: data,
          business: Constants.Businesses[data.business_id - 1],
        },
    });
  }

  _renderGridCell = (data, index) => (
    <TouchableOpacity onPress={() => this.onClickCell(data, index)}>
      <View style={styles.box}>
        <View style={styles.imagebox}>
          <Image source={images.tab}/>
        </View>
        <View style={styles.textbox}>
          <Text style={styles.name}>{data.meal_name}</Text>
          <Text style={styles.restaurant}>from {Constants.Businesses[data.business_id - 1].business_name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.time}>{data.quantity} remaining</Text>
            <Text style={styles.time}>before {data.time_start}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.price}>0.5KMs</Text>
            <Text style={styles.price}>£{data.cost.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
  render() {
    const listContainer = this.state.switchView ? (
      <View style={styles.wrapper}>
        <View style={styles.subheader}>
          <Text style={styles.pitapan}>MEALS NEARBY</Text>
        </View>
        <ScrollView>
         <SudokuGrid
            columnCount={1}
            dataSource={Constants.Meals}
            renderCell={this._renderGridCell}
          />
        </ScrollView>
      </View>
    ) : (
      <View style={{flex: 1}}>
        <MapView
          ref={component => this.map = component}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 51.5314,
            longitude: -0.0694,
            latitudeDelta: 0.0201,
            longitudeDelta: 0.0201,
          }}
        >
        {Constants.Businesses.map((marker) => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinate}
            image={Platform.OS === 'ios' ? null : images.marker}>
            {Platform.OS === 'ios' ? <Image source={images.marker} /> : <View/>}
            <MapView.Callout tooltip = {false} onPress= {()=>this.bubbleClick(marker)} underlayColor='#dddddd'/*style={styles.customView}*/>
              <View style={{alignItems: 'center', width: 140}}/*style={styles.calloutText}*/>
                <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{marker.business_name}</Text>
                <Text style={{color: 'black', textAlign: 'center'}}>{marker.address}</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        ))}
        </MapView>
        {/*<View style={styles.zoom}>
          <TouchableHighlight underlayColor='transparent' onPress={()=> this.zoomoutClick()}>
              <Text style={styles.zoomButtonPlus}>+</Text>
          </TouchableHighlight>
          <View style={styles.zoomSeperate}/>
          <TouchableHighlight underlayColor='transparent' onPress={()=>this.zoominClick()}>
              <Text style={styles.zoomButtonMinus}>-</Text>
          </TouchableHighlight>
        </View>*/}
      </View>
    )
    return (
      <View style={{flex: 1}}>
        <View style={Styles.navBarheader}>
          <View style={{ width: 40 }}/>
          <Image source={ images.logoWhiteHoriz} style={Styles.logoMenu}/>
          <TouchableOpacity onPress={() => this.props.openDrawer()} style={Styles.menuIcon}>
            <Icon name="md-menu" style={{color: 'white', fontSize: 40}}/>
          </TouchableOpacity>
        </View>
        {listContainer}
        <View style={{ ...Styles.center, margin: 20 }}>
          <TouchableOpacity style={styles.switchButton} onPress={() => this.onSwitchContainer()}>
            <Text style={styles.buttonText}>SWITCH TO {this.state.switchView ? 'MAP' : 'LIST'}</Text>
          </TouchableOpacity>
        </View>
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
    openDrawer: () => dispatch(openDrawer()),
  };
}
function mapStateToProps(state) {
  const routes = state.get('route');
  return { routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
