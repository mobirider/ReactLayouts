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
  View,
  Navigator
} from 'react-native';

import ModuleManager from './app_modules/ModuleManager';

/* ============================================================================================================= */
/* CODE PUSH                                                                                                     */
/* ============================================================================================================= */
import CodePush from "react-native-code-push";
ReactLayouts = CodePush(ReactLayouts);

/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class ReactLayouts extends Component {
  render() {
    return (
      <ModuleManager />
    );
  }
}

AppRegistry.registerComponent('ReactLayouts', () => ReactLayouts);
