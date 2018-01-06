import React from "react";
import {
    Animated,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { MapView } from "expo";
import { StackNavigator } from "react-navigation";

import Mapcontainer from "./Mapcontainer";
import Targetview from "./Targetview";

export default class Target extends React.Component {
    state = {
        offsetDist: 381,
        mapOffset: new Animated.Value(0),
        targetLocation: {
            latitude: 51.843838,
            longitude: 5.869274
        },
        targetKnown: true,
        mapHidden: true,
        targetName: "Fons van der Plas",
        targetNick: "Fons",
        targetPicaUrl:
            "https://avatars0.githubusercontent.com/u/6933510?s=460&v=4"
    };

    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                
                <TouchableOpacity
                    style={{
                        zIndex: 6
                    }}
                    activeOpacity={0.5}
                    disabled={this.state.mapHidden}
                    onPress={() => {
                        this.setState({
                            mapHidden: true
                        });
                        Animated.timing(this.state.mapOffset, {
                            toValue: 0,
                            duration: 200
                        }).start();
                    }}
                >
                    <Targetview
                        navigation={this.props.navigation}
                        offset={this.state.mapOffset}
                        targetPicaUrl={this.state.targetPicaUrl}
                        name={this.state.targetName}
                        upload={result => {
                            if (result == null) {
                                return;
                            }
                            if (result.cancelled) {
                                return;
                            }
                            console.log(result.cancelled);
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        zIndex: 1
                    }}
                    activeOpacity={0.5}
                    onPress={async () => {
                        const { status } = await Expo.Permissions.askAsync(
                            Expo.Permissions.LOCATION
                        );
                        if (status !== "granted") {
                            return;
                        }
                        this.setState({
                            //mapOffset: -200,
                            mapHidden: false
                        });
                        Animated.timing(this.state.mapOffset, {
                            toValue: -this.state.offsetDist,
                            duration: 200
                        }).start();

                        console.log("opening map...");
                    }}
                    disabled={!this.state.mapHidden}
                >
                    <Mapcontainer
                        offset={Animated.multiply(
                            Animated.add(
                                this.state.mapOffset,
                                new Animated.Value(this.state.offsetDist)
                            ),
                            new Animated.Value(-0.5)
                        )}
                        interactive={!this.state.mapHidden}
                        targetKnown={this.state.targetKnown}
                        targetLocation={this.state.targetLocation}
                        targetNick={this.state.targetNick}
                        targetPicaUrl={this.state.targetPicaUrl}
                        targetName={this.state.targetName}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
