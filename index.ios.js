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

import MainScene from './app/MainScene';
import ModuleManager from './app_modules/ModuleManager';

/* ============================================================================================================= */
/* CODE PUSH                                                                                                     */
/* ============================================================================================================= */
import CodePush from "react-native-code-push";

// check updates each time app returns to foreground
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };

// manually check updates
// let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
ReactLayouts = CodePush(codePushOptions)(ReactLayouts); // cette syntaxe lô

/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class ReactLayouts extends Component {
  render() {
    return (
      <ModuleManager />
      /*<Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
            <MainScene nav = {navigator} >
            </MainScene>
        }
      />*/
    );
  }
}

AppRegistry.registerComponent('ReactLayouts', () => ReactLayouts);
