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
  WebView,
  Navigator,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import MainButton from './../app/MainButton.js';

/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class LegalScene extends Component {
    render() {
    return (
        <View style={{backgroundColor:'white', flexDirection:'column', flex:1 }}>
            <WebView style={{
                backgroundColor: 'white',
                height: 200,
              }} 
              source={{uri:'https://google.fr/'}} />
            
      </View>
    );
  }
}


LegalScene.propTypes = {
  nav: PropTypes.object.isRequired,
}




/* ============================================================================================================= */
/* CALLBACKS                                                                                                     */
/* ============================================================================================================= */




