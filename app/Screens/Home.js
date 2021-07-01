import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native"
import IonIcon from 'react-native-vector-icons/Ionicons';

const stylesHome = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonLower: {
        borderRadius: 10,
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textLower: {
        color: 'white',
        fontSize: 14,

    }
})

const Home = ({ navigation }) => {
    return (
        <View style={
            { flex: 1, paddingHorizontal: 30, paddingTop: 30 }
        }>
            <Text style={stylesHome.titleText}>Navigation Tutorial{'\n'}</Text>
            <Text style={{ paddingBottom: 50 }}>Select a screen to go to, or use side drawer to view contact us page.</Text>
            {/* <IonIcon name="ios-home" size={16} color="blue"/> */}
            <Pressable style={stylesHome.buttonLower} onPress={() => this.props.navigation.navigate('Details')}>
                <IonIcon name="help-circle" size={22} color="white" /><Text style={stylesHome.textLower}>  Details Screen</Text>
            </Pressable>
            <Text>{'\n'}</Text>
            <Pressable style={stylesHome.buttonLower} onPress={() => navigation.navigate('Settings')}>
                <IonIcon name="construct" size={22} color="white" /><Text style={stylesHome.textLower}>  Settings Screen</Text>
            </Pressable>
        </View>
    )
}

export default Home;