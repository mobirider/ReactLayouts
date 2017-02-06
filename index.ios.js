/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use-strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  View
} from 'react-native';


export default class ReactLayouts extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>

        {/* TOP BAR */}
        <View style={styles.top_bar}>
          {/* LOGO AGR2 */}
          <Image 
            style={styles.logo_image}
            resizeMode={"contain"}
            source={require('./images/vs_logo.png')} />
          <Image/>
          
          {/* SEPARATEUR ORANGE */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1, width: 1, height: 10, backgroundColor: 'rgba(232,92,33,255)'}} />
          </View>
        </View>

        {/* CONTENTS */}
        <View style={styles.content}>      
            <Text>This is the content</Text>
        </View>


        { /* TAB BAR */ }
        <View style={styles.tab_bar}>
          <TouchableOpacity onPress={onHomePressed}>
            <Image style={styles.tab_image}
                   resizeMode={"contain"}
                   source={require('./images/home.png')}>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPressed}>
            <Image style={styles.tab_image}
                   resizeMode={"contain"}
                   source={require('./images/phone.png')}>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPressed}>
            <Image style={styles.tab_image}
                   resizeMode={"contain"}
                   source={require('./images/settings.png')}>
            </Image>
          </TouchableOpacity>
        </View>
      </View>        
    );
  }
}

var styles = StyleSheet.create({
    mainContainer: {
      backgroundColor:'#ebeef0',
      flexDirection:'column',
      flex:1 // take all available space
    },

    logo_image: {
      width: 128, 
      height: 96, 
      backgroundColor: "rgba(0,255,0,255)",
    },

    content: {
      backgroundColor:'#ebee00',
      flex:1,
    },

    top_bar:{
        backgroundColor:'#81c04d',
        paddingTop:0,
        paddingBottom:10,
        flexDirection:'column'
    },

    tab_bar:{
      paddingBottom: 8, 
      paddingTop: 8,
      backgroundColor:'#55c0FF',
      flexDirection:'row',
      justifyContent: 'space-between'
    },

    tab_image: {
      
      height: 32, 
      backgroundColor: "rgba(128,255,0,255)",
    },

    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        backgroundColor:'red',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        backgroundColor: 'blue',
        flex:1                // container will use all available space
    }
});



const onHomePressed = () => {
  Alert.alert("home press");
}

const onPhonePressed = () => {
  Alert.alert("phone press");
}

const onSettingsPressed = () => {
  Alert.alert("settings press");
}

AppRegistry.registerComponent('ReactLayouts', () => ReactLayouts);
