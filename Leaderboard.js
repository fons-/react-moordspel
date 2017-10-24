import React from "react";
import {
    Alert,
    TouchableOpacity,
    Animated,
    View,
    Text,
    Image,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { List, ListItem } from "react-native-elements";
import Toptitle from './Toptitle';

export default class Leaderboard extends React.Component {
    state = {
        //offset: 0
    };

    render() {
		const list = [
	  {
	    name: 'Amy Farha',
	    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
	    subtitle: 'Vice President'
	  },
	  {
	    name: 'Chris Jackson',
	    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
	    subtitle: 'Vice Chairman'
	  },
	]
        return (
			<View style={{
				backgroundColor: 'white',
			}}>
			<Toptitle title={'Leaderboard:'} navigation={this.props.navigation} />
			<ScrollView style={{
				height: '100%',
			}}>
<List >
	{
		list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
		subtitle={l.subtitle}
      />
    ))
	}
</List></ScrollView>
		</View>
        );
    }
}
