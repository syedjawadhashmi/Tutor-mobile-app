import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
	{
		key: 'somethun',
		height: 200,
		title: "Turn your student' task into fun",
		text: 'TutorApp is you authoring tool for game-based learning environment with full teacher control',
		imageBG: require('../../assets/Path4.png'),
		image: require('../../assets/2.png'),
	},
	{
		key: 'somethun-dos',
		height: 250,
		title: 'Create group for students',
		text: 'Gather you students into groups according to their age, class or subject',
		imageBG: require('../../assets/Path4.png'),
		image: require('../../assets/2.png'),
	},
	{
		key: 'somethun1',
		title: 'Create challenges for students',
		height: 250,
		text: 'Questions that you add are intgrated in your students favorite game',
		imageBG: require('../../assets/Path2.png'),
		image: require('../../assets/1.png'),
	},
	{
		key: 'somethun1',
		title: "Track students' results and perfomance",
		height: 250,
		text: 'As you student play and complete tasks, TutorApp will get the result',
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
	}

	_renderItem = (item) => {
		return (
			<View style={styles.container}>
				<View style={{ width: '100%', height: '100%', borderWidth: 0, alignItems: 'center', justifyContent: 'center', marginTop: Dimensions.get('window').width < Dimensions.get('window').height ? -50 : 0, backgroundColor: '#FAFAFA', }}>
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
			<View style={{ backgroundColor: '#EA4335', width: 35, height: 35, borderRadius: 80, alignItems: 'flex-start', justifyContent: 'center', marginLeft: '45%' }}>
				<Icon containerStyle={{ marginLeft: -4 }} color="white" name="arrowright" type="antdesign" />
			</View>
		)
	}
	_onDone = () => {
		this.props.navigation.navigate('LoginScreen');
	};
	_onSkip = () => {
		this.props.navigation.navigate('LoginScreen');
	};
	render() {
		return (
			<View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center' }}>
				<AppIntroSlider
					skipLabel="Skip"
					doneLabel="Get Start"
					nextLabel="Next"
					prevLabel="Back"
					renderNextButton={this._nextButton}
					skipLabelStyle={{ color: '#fff' }}
					buttonStyle={{ backgroundColor: '#EA4335', width: 150, marginLeft: '28%', borderRadius: 50 }}
					buttonTextStyle={{ color: 'white', fontFamily: 'SFProDisplay-Regular', fontSize: 14 }}
					activeDotStyle={{ backgroundColor: '#EA4335', width: 20, height: 5 }}
					dotStyle={{ backgroundColor: 'lightgrey', width: 20, height: 5 }}
					renderItem={this._renderItem}
					slides={slides}
					bottomButton
					onDone={this._onDone}
					onSkip={this._onSkip}
				/>
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
