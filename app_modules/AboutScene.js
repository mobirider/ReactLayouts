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
export default class AboutScene extends Component {
    render() {
    return (
        <View style={{backgroundColor:'white', flexDirection:'column', flex:1, paddingTop:22 }}>
            <TouchableOpacity style={{ padding:8 }}
                              onPress={() => { this.props.nav.pop({id: 'home', data: Object}); }}>
                <Text style={{color:'#1E90FF', }}>&#60; Retour</Text>
                <View style={{backgroundColor:'#1E90FF', height:1 }}/>
            </TouchableOpacity>
            <WebView style={{
                backgroundColor: 'white',
                height: 200,
              }} 
              source={{uri:'http://www.mutuelle-viasante.fr/notre-mutuelle-sante'}} />
      </View>
    );
  }
}


AboutScene.propTypes = {
  nav: PropTypes.object.isRequired,
}
