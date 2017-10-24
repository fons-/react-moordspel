import React from "react";
import { Animated, Text, View, TouchableOpacity } from "react-native";
import { MapView } from "expo";
import {
  StackNavigator,
} from 'react-navigation';

import Mapcontainer from "./Mapcontainer";
import Target from "./Target";
import Home from "./Home";
import Leaderboard from "./Leaderboard";

const Root = StackNavigator({
    Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
},
    Leaderboard: {
        screen: Leaderboard,
    },
    Target: {
        screen: Target,
    }
},{

    headerMode: 'none',
})

export default class App extends React.Component {

    render() {
        return (
            <Root />
        );
    }
}
