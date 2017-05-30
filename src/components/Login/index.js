import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { TouchableHighlight, TouchableOpacity, View, Text, Image, Navigator } from 'react-native';
import { connect } from 'react-redux';

import { Container, Header, Title, Form, InputGroup, Input, Item, Label, Button, Icon, Spinner } from 'native-base';
import Home from '../../components/Home';
import Register from '../../components/Register';
import images from '../../image.js'
import { replaceRoute, pushNewRoute } from '@actions/route';

class Login extends Component {
    constructor(props){
      super(props);
      this.initialState = {
  			isLoading: false,
  			email: 'user1@facebook.com',
  			password: '12345678',
  		};
	    this.state = this.initialState;
      this.onPressNewUser = this.onPressNewUser.bind(this);
      this.onPressLogin = this.onPressLogin.bind(this);
    }

    onPressLogin() {
      this.props.pushNewRoute('home');
      // this.props.navigator.push({
      //   component: Home,
      //   props: { /* ... */ }
      // });
    }

    onPressNewUser = () => {
        this.props.replaceRoute('register');
    }

	render() {
		return (
			<Container style={{backgroundColor:'white'}}>
				<View style={{marginTop: 70, justifyContent: 'center', alignItems: 'center'}}>
					<Image  source={ images.logoGreen } style={{width:250, height:150, resizeMode:'contain'}}/>
					<View >

						<InputGroup style={{marginTop: 20, width: '60%'}}>
							<Icon name="ios-mail" />
							<Input
								placeholder="Email"
								keyboardType="email-address"
								autoCorrect={false}
								autoCapitalize="none"
								onChangeText={email => this.setState({ email })}
								value={this.state.email}
							/>
						</InputGroup>
						<InputGroup style={{marginTop: 10}}>
							<Icon name="ios-unlock" />
							<Input
								placeholder="Password"
								onChangeText={password => this.setState({ password })}
								value={this.state.password}
								secureTextEntry
							/>
						</InputGroup>
						<InputGroup />

						<View style={{padding: 10, marginTop: 50}}>
							<Button block success onPress={this.onPressLogin}>
								<Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Login</Text>
							</Button>
							<TouchableOpacity style={{marginTop: 10, alignSelf: 'flex-end'}}>
                <Text style={{color: 'black'}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
							<Button block success style={{marginTop: 30}} onPress={this.onPressNewUser}>
								<Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>New User</Text>
							</Button>
						</View>
					</View>
				</View>
			</Container>
		);
	}
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
