import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View, Navigator } from 'react-native';
import { connect } from 'react-redux';
import { popRoute } from '@actions/route';
import { closeDrawer, openDrawer } from '@actions/drawer';
import Drawer from 'react-native-drawer'

import Login from './components/Login';
import Register from './components/Register';
import Setting from './components/Setting';
import Meals from './components/Meals';
import Home from './components/Home';
import Product from './components/Product';
import Order from './components/Order';

import ControlPanel from './components/Drawer'

Navigator.prototype.replaceWithAnimation = function (route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};
export var globalNav = {};
class AppNavigator extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    globalNav.navigator = this._navigator;
    if(this.props.drawerState == 'opened')
      this.openDrawer();

    if(this.props.drawerState == 'closed')
      this.closeDrawer();
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this._navigator.getCurrentRoutes();
      if (routes[routes.length - 1].id === 'login') {
        return false;
      }
      this.popRoute();
      return true;
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }
    if (this.props.drawerState === 'closed') {
      this._drawer.close()
    }
  }
  componentWillUnmount() {
    if (this.watchID !== null) {
      navigator.geolocation.clearWatch(this.watchID);
    }
  }
  openDrawer() {
    this._drawer.open();
  }
  openNavDrawer() {
    if (this.props.drawerState === 'closed') {
      this.props.openDrawer();
    }
  }
  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }
  popRoute() {
    this.props.popRoute();
  }
  renderScene(route, navigator) {
      switch ( route.id ) {
        case 'login':
          return <Login navigator={navigator} {...route.passProps}/>;
        case 'register':
          return <Register navigator={navigator} {...route.passProps}/>;
        case 'setting':
          return <Setting navigator={navigator} {...route.passProps}/>;
        case 'meals':
          return <Meals navigator={navigator} {...route.passProps}/>;
        case 'home':
          return <Home navigator={navigator} {...route.passProps}/>;
        case 'product':
          return <Product navigator={navigator} {...route.passProps}/>;
        case 'order':
          return <Order navigator={navigator} {...route.passProps}/>;
        default:
          return <Login navigator={navigator} {...route.passProps}/>;
      }
  }
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={300}
        content={<ControlPanel navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        side="left"
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0}
        panCloseMask={0}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
            mainOverlay: {
              right: 0,
              opacity: ratio / 1.2,
            },
          };
        }}
        negotiatePan
      >
        <View style={{ flex: 1 }}>
          <Navigator
            ref={(ref) => { this._navigator = ref; }}
            configureScene={(route) => {
              const id = route.id;
              if (id === 'home' || id === 'login' || id === 'register')
                return Navigator.SceneConfigs.FadeAndroid;
              else if (id === 'login') return Navigator.SceneConfigs.PushFromRight;
              else if (id === 'register') return Navigator.SceneConfigs.FadeAndroid;
              return Navigator.SceneConfigs.PushFromRight;
            }}
            initialRoute={{ id: (Platform.OS === 'android') ? 'login' : 'login' }}
            renderScene={this.renderScene.bind(this)}
          />
        </View>
      </Drawer>
    );
  }
}
AppNavigator.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    closeDrawer: () => dispatch(closeDrawer()),
    openDrawer: () => dispatch(openDrawer()),
  };
}

function mapStateToProps(state) {
  const { drawerState } = state.get('drawer');
  return { drawerState };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
