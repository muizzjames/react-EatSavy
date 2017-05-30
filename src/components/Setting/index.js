import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container, Content, Form, Item, Input, InputGroup, Label, Button, Icon } from 'native-base';
import Home from '../../components/Home'
import Meals from '../../components/Meals'

class Setting extends Component {

    constructor(props){
        super(props);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    onPressSubmit() {
      this.props.navigator.push({
        id: 'home',
        props: { /* ... */ }
      });
    }

    onPressSkip = () => {

    }

	render() {
		return (
			<Container style={{backgroundColor:'white'}}>
				<View style={{alignItems: 'center'}}>
					<View style={{marginTop: 70, width: '60%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>(Customer)App</Text>
            <Text style={{fontSize: 30}}>Settings</Text>
            <Item style={{marginTop: 50}} floatingLabel>
                <Label>Full name</Label>
                <Input />
            </Item>

            <InputGroup style={{width: '100%'}}>
                <TouchableOpacity style={{width: '10%', marginTop: 50}}>
                    <Icon name="ios-add" />
                </TouchableOpacity>
                <Label style={{width: '100%', marginTop: 50}}>Add Card</Label>
            </InputGroup>
            <InputGroup />
            <Button block success style={{marginTop: 70, alignSelf: 'flex-end'}} onPress={this.onPressSubmit}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Submit</Text>
            </Button>
            <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 20}}><Label style={{color: 'blue', fontSize: 15}}>Skip</Label></TouchableOpacity>
					</View>
				</View>
			</Container>
		);
	}
}

export default Setting;
