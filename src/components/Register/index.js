import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Container, Header, Title, Form, InputGroup, Input, Item, Label, Button, Icon, Spinner } from 'native-base';
import Setting from '../../components/Setting';

class Register extends Component {

  constructor(props){
      super(props);

      this.onPressCustomer = this.onPressCustomer.bind(this);
      this.onPressServiceProvider = this.onPressServiceProvider.bind(this);
  }

  onPressCustomer() {
    this.props.navigator.push({
      id: 'setting',
      props: { /* ... */ }
    });
  }
  onPressServiceProvider = () => {

  }

	render() {
		return (
			<Container style={{backgroundColor:'white'}}>
				<View style={{marginTop: 70, justifyContent: 'center', alignItems: 'center'}}>
					<Image  source={ require( '../../../assets/images/EatSavvy_Logo_Green.png' )} style={{width:250, height:150, resizeMode:'contain'}}/>
					<View style={{marginTop: 20, width: '60%', alignItems: 'center', justifyContent: 'center'}}>
            <Label style={{fontSize: 20}}>Complete your Account</Label>
            <Label style={{marginTop: 40}}>Are you a</Label>
            <Button block success style={{marginTop: 20}} onPress={this.onPressCustomer}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Customer</Text>
            </Button>
            <Label style={{marginTop: 40}}>or a</Label>
            <Button block success style={{marginTop: 20}} onPress={this.onPressServiceProvider}>
              <Text style={{fontSize:20, color: 'white', fontWeight: 'bold'}}>Service Provider</Text>
            </Button>
					</View>
				</View>
			</Container>
		);
	}
}

export default Register;
