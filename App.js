import React from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	Vibration,
	Button,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
	return (
		<ScrollView style={styles.containerStyle}>
			<ScrollView>
				<Text style={styles.firstText}>HELLO MY FRIENDS FROM GHANI</Text>
				<Text style={styles.secondText}>HELLO MY FRIENDS FROM GHANI</Text>
				<Text style={styles.thirdText}>HELLO MY FRIENDS FROM GHANI</Text>
				<Image source={require('./assets/konexio-logo_1.png')} />
				<Image
					style={{ width: 120, height: 120, padding: 30 }}
					source={{
						uri:
							'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
					}}
				/>
				<TouchableOpacity
					style={styles.appButtonContainer}
					onPress={() => alert('Button has been pressed')}>
					<Text style={styles.appButtonText}>Press Here</Text>
				</TouchableOpacity>
				<Text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
					delectus explicabo obcaecati consequuntur placeat aliquid cupiditate
					repellendus sunt dicta dolore quod, non veritatis tempore! Tenetur
					deleniti a reprehenderit voluptatibus ducimus?Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Porro explicabo, a fugiat esse
					voluptates dolorum illo unde deserunt sapiente illum assumenda, alias
					amet at suscipit possimus dignissimos in distinctio earum!
				</Text>
				<ActivityIndicator size='large' color='#00ff00' />
				<WebView
					source={{ uri: 'https://www.konexio.eu/index.html' }}
					style={{ height: 600 }}
				/>
				<Button
					title='Vibrate once'
					style={styles.appButtonContainer}
					onPress={() => Vibration.vibrate()}>
					<Text style={styles.appButtonText}>Press Here</Text>
				</Button>
			</ScrollView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'green',
		marginVertical: 80,
	},
	firstText: {
		fontSize: 30,
		marginVertical: 80,
	},
	secondText: {
		textAlign: 'center',
		marginVertical: 80,
	},
	thirdText: {
		fontWeight: 'bold',
		marginVertical: 80,
	},
	appButtonContainer: {
		elevation: 8,
		backgroundColor: '#6699ff',
		borderRadius: 5,
		paddingVertical: 12,
		paddingHorizontal: 16,
		margin: 20,
	},
	appButtonText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
});

export default App;
