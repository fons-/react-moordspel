import React from "react";
import {
    Alert,
    TouchableOpacity,
    Animated,
    View,
    Text,
    Image,
	ScrollView,
	StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationActions } from 'react-navigation';

export default class Toptitle extends React.Component {
	render() {
		return (
		<View>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
		<View style={{
			//position: 'absolute',
			marginTop: 30,
			marginLeft: 20,
			zIndex: 100,
			height: 35,
		}}>
			<TouchableOpacity
				onPress={() => {
					//this.props.navigation.goBack('Home');
					this.props.navigation.dispatch(NavigationActions.back({key: null}));
				}}>
		<Ionicons
			name='md-menu'
			size={35}
			color="black"
		/>
	</TouchableOpacity></View>
	<View
		style={{
			flexDirection: "row",
			paddingLeft: 20,
			paddingTop: 20,
			paddingBottom: 20,
		}}
	>
		<Text
			style={{
				width: "100%",
				textAlign: "left",
				fontSize: 40,
				fontWeight: "bold"
			}}
		>
			{this.props.title}
		</Text>
	</View></View>
);
	}
}
