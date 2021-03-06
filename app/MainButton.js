/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use-strict';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  View,
  Navigator
} from 'react-native';

/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class MainButton extends Component {
    render() {
    return (
        <View style={styles.content_textbutton}>
        	<TouchableOpacity style={styles.content_button} onPress={this.props.onPress}>
          		<Image style={styles.content_image}
                	   resizeMode={"contain"}
                     source={{uri:this.props.uri}}>
          		</Image>
        	</TouchableOpacity>
      		<Text style={styles.content_text}>{this.props.name}</Text>
      	</View>
    );
  }
}


/* ============================================================================================================= */
/* PROPS                                                                                                         */
/* ============================================================================================================= */
MainButton.propTypes = {
  name:  PropTypes.string.isRequired,
  uri:  PropTypes.string.isRequired,
  onPress:  PropTypes.func.isRequired,
};


/* ============================================================================================================= */
/* STYLESHEETS                                                                                                   */
/* ============================================================================================================= */
var styles = StyleSheet.create({
    content_row: {
      flex:1,
      /*backgroundColor:'teal',*/
      flexDirection:'row',
      justifyContent: 'space-around'
    },

    content_textbutton: {
      flexDirection:'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      /*backgroundColor: 'yellow',*/
      height:128,
      width:144
    },
    content_image: {
      height: 64, 
      width: 64,
      borderRadius: 16,
    },
    content_text: {
      color:'gray',
      textAlign:'center'
    },
    content_button: {
      backgroundColor: 'rgba(158, 212, 255, 255)',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
});
