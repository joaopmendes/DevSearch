import React from "react";
import {View} from "react-native";
import {Wrapper} from './profile.styles'
import {WebView} from "react-native-webview";

function Profile({navigation}) {
    return <WebView style={{flex: 1}} source={{uri: `https://github.com/${navigation.getParam("githubUsername")}`}}>

    </WebView>
}

export default Profile;