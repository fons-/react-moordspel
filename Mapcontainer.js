import React from "react";
import { Animated, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { MapView } from "expo";

class Mapcontainer extends React.Component {
    state = {
        input: "www.google.com"
    };

    constructor(props) {
        super(props);
        Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    }

    render() {
        let possiblePin = null;
        if (this.props.targetKnown) {
            possiblePin = (
                <MapView.Marker
                    style={{
                        alignItems: "center"
                    }}
                    coordinate={this.props.targetLocation}
                    title={this.props.targetName}
                >
					<View style={{
					shadowOpacity: .5,
					shadowColor: '#000',
					shadowRadius: 5,
					shadowOffset: { width: 0, height: 2 },}}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            borderColor: "white",
                            borderWidth: 3,
							zIndex: 100,
                        }}
                        source={{ uri: this.props.targetPicaUrl }}
                    /></View>
                    <Text>{this.props.targetNick}</Text>
                </MapView.Marker>
            );
        }
        return (
            <Animated.View
                style={{
                    flexDirection: "row",
                    height: "100%",
					marginTop: this.props.offset,
					zIndex: 0,
                }}
            >
                <MapView
                    //provider={"google"}
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 51.843838,
                        longitude: 5.85,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                    rotateEnabled={this.props.interactive}
                    scrollEnabled={this.props.interactive}
                    zoomEnabled={this.props.interactive}
                    pitchEnabled={false}
                >
                    {possiblePin}
                </MapView>
            </Animated.View>
        );
    }
}

export default Mapcontainer;
