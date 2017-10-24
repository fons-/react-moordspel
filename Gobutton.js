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

export default class Gobutton extends React.Component {
    state = {
        //offset: 0
    };

    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
					marginTop: 20,
                    //flex: 1,
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate(this.props.link);
                        }}
                    >
                        <View
                            style={{
                                //flexDirection: "row",
                                //alignItems: "center",
                                //marginLeft: 20,
                                //marginRight: 20,
                                //marginTop: 20,
                                borderWidth: 3,
                                borderColor: "white",
                                borderRadius: 100,
                                padding: 8,
								paddingLeft: 12,
								paddingRight: 12,
                                //backgroundColor: "transparent"
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
								<Ionicons
                                    name={this.props.icon}
                                    size={20}
                                    color="white"
                                />{'  '}{this.props.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
