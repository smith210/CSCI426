import React, {Component} from 'react';
import {Modal, ProgressBarAndroid, TextInput, Text, View, Button, Platform, Picker, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

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
		<View style={{marginTop: 22}}>

				<Text>Add Food Item</Text>
				<TextInput
					onChangeText={this.onNameChangeText}
					value={this.state.name}
					placeholder = "Name of Item"
				/>
				<TextInput
					onChangeText={this.onQuantityChangeText}
					value={this.state.quantity}
					placeholder = "Quantity"
				/>
				<TextInput
					onChangeText={this.onCategoryChangeText}
					value={this.state.category}
					placeholder = "Category"
				/>

				<TouchableOpacity onPress={this.showPicker}>
					<Text>Exipiration Date</Text>
				</TouchableOpacity>
				<Text>
					{this.state.chosenDate}
				</Text>
				<DateTimePicker
					isVisible={this.state.calendarVisible}
					onConfirm={this.handlePicker}
					onCancel={this.hidePicker}
				/>
				<Button title="Next" onPress={() => this.setConfirmVisible()}/>
				<View>
					<ProgressBarAndroid 
						styleAttr='Horizontal'
						indeterminate={false}
						progress={0.33}
					/>
				</View>

			<Modal
				visible={this.state.confirmationVisible}
				backdropColor = {'black'}
			>
				<View>
					<Text>Review Information</Text>
					<Text>{this.state.name}</Text>
					<Text>{this.state.quantity}</Text>
					<Text>{this.state.category}</Text>
					<Text>{this.state.chosenDate}</Text>
					<Button title="Back" onPress={() => this.setCreateVisible()}/>
					<Button title="Save" onPress={() => this.returnScreens()}/>
					<View>
						<ProgressBarAndroid 
							styleAttr='Horizontal'
							indeterminate={false}
							progress={0.66}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
	}
}

/*const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FSFCFF',
	},
	button: {
		width: 250,
		height: 50,
		backgroundColor: '#330066',
		borderRadius: 30,
		justifyContent: 'center',
		marginTop: 15
	}
});*/