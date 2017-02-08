/**
 * Legal Module
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



/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class LegalButton extends Component {

  	render() {
		return (
		    <View style={styles.content_textbutton}>
				<TouchableOpacity style={styles.content_button} onPress={onButtonPressed}>
				  <Image style={styles.content_image}
				         resizeMode={"contain"}
				         source={require('./../images/exclamation.png')}>
				  </Image>
				</TouchableOpacity>
			<Text style={styles.content_text}>Module Button</Text>
			</View>
		);
	}
}


export class LegalScene extends Component {

  	render() {
		return (
		    <View>
			</View>
		);
	}
}


/* ============================================================================================================= */
/* STYLESHEETS                                                                                                   */
/* ============================================================================================================= */
var styles = StyleSheet.create({

    content_textbutton: {
      flexDirection:'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'yellow',
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
      /*backgroundColor: "black",*/
      textAlign:'center'
    },
    content_button: {
      backgroundColor: 'rgba(232,92,33,255)',
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


/* ============================================================================================================= */
/* CALLBACKS                                                                                                     */
/* ============================================================================================================= */
const onButtonPressed = () => {
  



}