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
  TouchableOpacity,
  Image,
  View
} from 'react-native';

// modules go here
// require("./legal.js");
import LegalButton from './legal.js';


export default class ModuleManager {

  constructor() {
      
    }

    getModule(aIndex) {
      return LegalButton();
    }

}