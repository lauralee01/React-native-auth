import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from  './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		apiKey: 'AIzaSyC7fr7iF6B52wnDuC4TqMrtdtlTqZbfdU4',
	    authDomain: 'authentication-3e9a8.firebaseapp.com',
	    databaseURL: 'https://authentication-3e9a8.firebaseio.com',
	    projectId: 'authentication-3e9a8',
	    storageBucket: 'authentication-3e9a8.appspot.com',
	    messagingSenderId: '253268524377'
		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
			);
	}
}

export default App;   