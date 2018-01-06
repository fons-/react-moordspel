import React from "react";
import {
    Alert,
    TouchableOpacity,
    Animated,
    View,
    Text,
    Image
} from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { NavigationActions } from 'react-navigation';
import Toptitle from './Toptitle';

class Targetview extends React.Component {
    state = {
        //offset: 0
    };

    render() {
        return (
            <Animated.View
                style={{
                    //position: 'absolute',
                    marginTop: this.props.offset,
                    //height: 500,
                    width: "100%",
                    shadowOpacity: .4,
                    shadowColor: "#000",
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 0 },
                    elevation: 1,
                    zIndex: 5
                }}
            >
                    <Toptitle title={'Your target:'} navigation={this.props.navigation}/>
                <View
                    style={{
                        height: 230,
                        flexDirection: "row",
                        alignItems: "center"
                        //backgroundColor: 'red',
                    }}
                >
                    <LinearGradient
                        style={{
                            position: "absolute",
                            height: 230,
                            width: "100%"
                        }}
                        //colors={["#e55934", "#fa7921"]}
						colors={['#d1495b','#edae49']}
						start={{ x: 0, y: .3 }}
                        end={{ x: 1, y: 0.7 }}
                    />
                    <View
                        style={{
                            shadowOpacity: 0.5,
                            shadowColor: "#000",
                            shadowRadius: 8,
                            shadowOffset: { width: 0, height: 2 },
                            marginLeft: (230 - 128) / 2,
                            width: 128,
                            height: 128
                        }}
                    >
                        <Image
                            style={{
                                width: 128,
                                height: 128
                            }}
                            source={{ uri: this.props.targetPicaUrl }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            paddingRight: 128 + (230 - 128) / 2
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderWidth: 3,
                                borderColor: "white",
                                borderRadius: 100,
                                padding: 8,
                                paddingLeft: 12,
                                paddingRight: 12,
                                backgroundColor: "transparent"
                            }}
                            onPress={async () => {
                                camera = false;
                                Alert.alert(
                                    "Confirm kill",
                                    "Choose image source:",
                                    [
                                        {
                                            text: "Camera",
                                            onPress: async () => {
                                                const {
                                                    status
                                                } = await Expo.Permissions.askAsync(
                                                    Expo.Permissions.CAMERA
                                                );
                                                if (status !== "granted") {
                                                    console.log(
                                                        "no camera access, status:"
                                                    );
                                                    console.log(status);
                                                    return;
                                                }
                                                result = await Expo.ImagePicker.launchCameraAsync(
                                                    { quality: 1 }
                                                );
                                                this.props.upload(result);
                                            }
                                        },
                                        {
                                            text: "Photo roll",
                                            onPress: async () => {
                                                result = await Expo.ImagePicker.launchImageLibraryAsync(
                                                    { quality: 1 }
                                                );
                                                this.props.upload(result);
                                            }
                                        },
                                        {
                                            text: 'Cancel',
                                            style: 'cancel',
                                        },
                                    ],
                                    {   cancelable: true }
                                );
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "white",
                                    fontWeight: "bold"
                                }}
                            >
                                CONFIRM{" "}
                                <Ionicons
                                    name="md-camera"
                                    size={20}
                                    color="white"
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        height: 150,
                        alignItems: "center",
                    }}
                >
                    <LinearGradient
                        style={{
                            position: "absolute",
                            height: 150,
                            width: "100%",
                            opacity: 0.,
                        }}
                        colors={["#fa7921", "#e55934"]}
                        start={{ x: 0, y: 0.3 }}
                        end={{ x: 1, y: 0.7 }}
                    />
                    <Text
                        style={{
                            width: "100%",
                            textAlign: "center",
                            fontSize: 40,
                            fontWeight: "bold",
                            backgroundColor: "transparent",
							//textDecorationLine: "underline",
                        }}
                    >
                        {this.props.name}
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

export default Targetview;
