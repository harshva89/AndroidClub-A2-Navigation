import React from "react";
import {View, Text, StyleSheet, Button} from "react-native"

const Home = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Button title="Settings" onPress={()=>navigation.navigate("Settings")}>
                
            </Button>
        </View>
    )
}

export default Home;