import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
	{
		key: 'somethun',
		height: 200,
		title: "Turn your students' tasks into fun",
		text: 'TutorApp is your authoring tool for game-based learning environment with full teacher control',
		imageBG: require('../../assets/Path4.png'),
		image: require('../../assets/2.png'),
	},
	{
		key: 'somethun-dos',
		height: 250,
		title: 'Create groups for students',
		text: 'Gather your students into groups according to their age, class, or subject',
		imageBG: require('../../assets/Path4.png'),
		image: require('../../assets/2.png'),
	},
	{
		key: 'somethun1',
		title: 'Create challenges for your students',
		height: 250,
		text: 'Questions that you add are integrated in your students favorite game',
		imageBG: require('../../assets/Path2.png'),
		image: require('../../assets/1.png'),
	},
	{
		key: 'somethun1',
		title: "Track students' results and performance",
		height: 250,
		text: 'As your students play and complete tasks, TutorApp will get the results',
		imageBG: require('../../assets/Path1f.png'),
		image: require('../../assets/4.png'),
	}
];

class OnBoarding extends Component {
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
		drawerLockMode: 'locked-closed'
	};
	constructor(props) {
		super(props);
		this.state = {
			enable: false
		}
		AsyncStorage.getItem('onboardingdone').then((onboardingdone) => {
			console.log(onboardingdone, "async")
			if (onboardingdone == null) {

				this.setState({ enable: true })

			} else this.props.navigation.navigate('LoginScreen');
		})
	}

	_renderItem = (item) => {
		return (
			<View style={styles.container}>
				<View style={{ width: '100%', height: '100%', borderWidth: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAFAFA', marginBottom: 50 }}>
					<TouchableOpacity style={{ alignItems: 'flex-end', width: '90%', top: -30 }} onPress={this._onSkip}><Text>Skip</Text></TouchableOpacity>
					<View style={{ height: 300 }}>
						<Image height="250px" style={{ alignItems: 'center', marginLeft: -130, top: -30 }} source={item.imageBG} />
						<Image height={item.height} style={{ top: -300 }} source={item.image} />
					</View>
					<View style={[styles.viewContainer, { marginTop: Dimensions.get('window').width < Dimensions.get('window').height ? 20 : 0, }]}>
						<Text style={styles.welcometext}>{item.title}</Text>
						<Text style={styles.subText}>{item.text}</Text>
					</View>
				</View>
			</View>
		);
	};
	componentDidMount() {

	}
	_nextButton = () => {
		return (
			<View style={{width:'100%',alignItems:'center'}}>
				<View style={{ backgroundColor: '#EA4335', width: 35, height: 35, borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>

					<Icon containerStyle={{ marginLeft: -15 }} color="white" name="arrowright" type="antdesign" />
				</View>
			</View>
		)
	}
	_doneButton = () => {
		return (
			<View style={{width:'100%',alignItems:'center'}}>
				<View style={{ backgroundColor: '#EA4335', width: 180, height: 35, borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
					<Text style={{color:'#fff'}}>Get Started</Text>
				</View>
			</View>
		)
	}
	_onDone = () => {
		let onboardingdone = 'done'
		AsyncStorage.setItem('onboardingdone', onboardingdone);
		this.props.navigation.navigate('LoginScreen');
	};
	_onSkip = () => {
		let onboardingdone = 'done'
		AsyncStorage.setItem('onboardingdone', onboardingdone);
		this.props.navigation.navigate('LoginScreen');
	};
	render() {
		return (
			<View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center' }}>
				{
					this.state.enable && <AppIntroSlider
						skipLabel="Skip"
						doneLabel="Get Started"
						nextLabel="Next"
						prevLabel="Back"
						renderNextButton={this._nextButton}
						renderDoneButton={this._doneButton}
						skipLabelStyle={{ color: '#fff' }}
						buttonStyle={{ backgroundColor: '#EA4335', width: 180, height: 40, borderRadius: 50 }}
						buttonTextStyle={{ color: 'white', fontFamily: 'SFProDisplay-Regular', fontSize: 16 }}
						activeDotStyle={{ backgroundColor: '#EA4335', width: 20, height: 5 }}
						dotStyle={{ backgroundColor: 'lightgrey', width: 20, height: 5 }}
						renderItem={this._renderItem}
						slides={slides}
						bottomButton
						onDone={this._onDone}
						onSkip={this._onSkip}
					/>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FAFAFA',
		borderWidth: 0,
		borderColor: '#000',
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
		height: '100%',
	},
	viewContainer: {
		width: '95%',
		alignItems: 'center',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	image: {
		width: 200,
		height: 230,
	},
	welcometext: {
		textAlign: 'center',
		fontFamily: 'SFProDisplay-Regular',
		fontSize: 16,
		height: 40,
		letterSpacing: 0.5,
		color: '#000'
	},
	subText: {
		width: '90%',
		fontFamily: 'SFProDisplay-Regular',
		fontSize: 12,
		textAlign: 'center',
		letterSpacing: 0.5,
		color: 'grey'
	},
});

export default OnBoarding;
