import React, {Component} from 'react';
import {Modal, ProgressBarAndroid, TextInput, Text, View, Button, Platform, Picker, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import Overlay from 'react-native-modal-overlay';

export default class AddItem extends Component {
	constructor(){
		super();
		this.state = {
			calendarVisible: false,
			emptyForm: true,
			chosenDate: moment().format('MMMM, Do YYYY'),
			name: '',
			quantity: '',
			category: '',
			createVisible: true,
			confirmationVisible: false
		}
		//this.handleClick = this.handleClick.bind(this);
	}
	//remove create portion, set confirm as visible
	setConfirmVisible = () => {
		this.setState({
			createVisible: false,
			confirmationVisible: true
		});
	}

	//remove confirm portion, set create as visible
	setCreateVisible = () => {
		this.setState({
			createVisible: true,
			confirmationVisible: false
		})
	}


	//get chosen date
	handlePicker = (datetime) => {
		this.setState({
			calendarVisible: false,
			chosenDate: moment(datetime).format('MMMM, Do YYYY'),
			emptyForm: false
		})
		this.canSubmit;
	}
	//display calendar to user
	showPicker = () => {
		this.setState({
			calendarVisible: true
		})
	}
	//hide calendar from user
	hidePicker = () => {
		this.setState({
			calendarVisible: false
		})
	}
	//Update name value
	onNameChangeText = (text) => {
		this.setState({
			name: text,
			emptyForm: false
		})
		this.canSubmit;
	}
	//Update Quantity value
	onQuantityChangeText = (text) => {
		this.setState({
			quantity: text,
			emptyForm: false
		})
	}
	//Update category value
	onCategoryChangeText = (text) => {
		this.setState({
			category: text,
			emptyForm: false
		})
	}

	returnScreens = () => {
		this.setState({
			createVisible: false,
			confirmationVisible:false
		})
		this.props.navigation.navigate('InventoryScreen')
	}

	//main function, renders and displays to screen
	render(){
		return(
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					onChangeText={this.onNameChangeText}
					value={this.state.name}
					placeholder = "Name of Item"
				/>
				<TextInput
					style={styles.textInput}
					onChangeText={this.onQuantityChangeText}
					value={this.state.quantity}
					placeholder = "Quantity"
				/>
				<TextInput
					style={styles.textInput}
					onChangeText={this.onCategoryChangeText}
					value={this.state.category}
					placeholder = "Category"
				/>
				<Text style={styles.text}>Exipiration Date</Text>
				<TouchableOpacity style={styles.date} onPress={this.showPicker}>
					<Ionicons name='md-calendar' size={30} color='black'/>
					<Text style={styles.text}>
						{this.state.chosenDate}
					</Text>
				</TouchableOpacity>
				<DateTimePicker
					isVisible={this.state.calendarVisible}
					onConfirm={this.handlePicker}
					onCancel={this.hidePicker}
				/>
				<View style={styles.buttonContainer}>
					<Button style={styles.button} title="Next" color='#024ba6' onPress={() => this.setConfirmVisible()}/>
				</View>
				<View>
					<ProgressBarAndroid 
						styleAttr='Horizontal'
						indeterminate={false}
						progress={0.33}
					/>
				</View>

				<Overlay style={styles.overlay} visible={this.state.confirmationVisible} backdropColor = {'black'}> 
					<View>
						<Text style={styles.text}>Review Information</Text>
						<Text style={styles.text}>Name: {this.state.name}</Text>
						<Text style={styles.text}>Quantity: {this.state.quantity}</Text>
						<Text style={styles.text}>Categories: {this.state.category}</Text>
						<Text style={styles.text}>Expiraiton Date: {this.state.chosenDate}</Text>
						<View style={styles.buttonContainer}>
							<Button style={styles.button} title="Back" color='#024ba6' onPress={() => this.setCreateVisible()}/>
							<Button style={styles.button} title="Save" color='#024ba6' onPress={() => this.returnScreens()}/>
						</View>
						<View>
							<ProgressBarAndroid 
								styleAttr='Horizontal'
								indeterminate={false}
								progress={0.66}
							/>
						</View>
					</View>
				</Overlay>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 15,
		
	},
	text :{
		fontSize: 18,
		marginTop: 5
	},
	textInput: {
		padding: 10,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		fontSize: 18
	},

	date: {
		justifyContent: 'space-around',
		marginRight: 150,
		flexDirection: 'row',
		fontSize: 18,
		padding: 10
		
	},
	buttonContainer:{
		flexDirection: 'row',
		justifyContent: 'center',
		width: 80,
		margin: 5,
		alignContent: 'center'
	},

	button: {
		padding: 10,
	},

	overlay: {
		backgroundColor: 'gray'
	}
});