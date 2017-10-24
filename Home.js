import React from "react";
import {
    Alert,
    TouchableOpacity,
    Animated,
    View,
    Text,
    Image
} from "react-native";
import { NavigationActions } from 'react-navigation';
import Gobutton from './Gobutton'

export default class Home extends React.Component {
    render() {
        return (

            <View style={{
				paddingTop: 20,
			}}>
				<Gobutton navigation={this.props.navigation} icon="md-person" title="Target" link='Target'/>
				<Gobutton navigation={this.props.navigation} icon='md-list' title="Leaderboard" link='Leaderboard'/>
                
            </View>
        );
    }
}
