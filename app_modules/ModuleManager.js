/**
 * Module list: list here the modules to add to your app.
 * @flow
 */
'use-strict';

import React, { Component } from 'react';
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

// modules go here
import LegalScene from './LegalScene.js';
import AboutScene from './AboutScene.js';
import MainScene from './../app/MainScene.js';

export default class ModuleManager extends Component {
    render() {
        return (
            <Navigator  initialRoute={{ title: 'home', index: 0 }}
                        renderScene={(route, navigator) => {
                            switch (route.id) {
                            case 'legal':
                                return <LegalScene nav = {navigator} />
                            case 'about':
                                return <AboutScene nav = {navigator} />
                            default:
                                return <MainScene nav = {navigator} />
                            }}
                        }/>
        );
    }
}