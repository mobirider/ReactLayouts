/**
 * Legal Module
 * @flow
 */
'use-strict';
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  Navigator,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import MainButton from './../app/MainButton.js';

/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class LegalButton extends MainButton {
  render() {
    return (
      <MainButton name="Mentions légales"
                  uri="https://lh4.googleusercontent.com/VgMKjCsks28SPZXk7s_BSXwA16By0Lj7DTJ3tLFppuLp43o7GcLRj5_3ELfVnuzx0OFea9RW8Oye_Fc=w1440-h839" 
                  onPress={() => {
                      Alert.alert("legal press")
                  }} />

      );
  }
}

class LegalScene extends Component {
    render() {
    return (
        <View>
        <Image 
            resizeMode={"contain"}
            source={require('./../images/vs_logo.png')} />
          <Image/>
      </View>
    );
  }
}


LegalButton.propTypes = {
  //nav: PropTypes.object.isRequired,
}




/* ============================================================================================================= */
/* CALLBACKS                                                                                                     */
/* ============================================================================================================= */




