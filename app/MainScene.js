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

import MainButton from './MainButton.js';
import LegalButton from '../app_modules/LegalButton.js';
import ModuleManager from '../app_modules/ModuleManager.js';

/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class MainScene extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>

        {/* TOP BAR */}
        <View style={styles.top_bar}>
          {/* LOGO AGR2 */}
          <Image 
            style={styles.logo_image}
            resizeMode={"contain"}
            source={require('./../images/vs_logo.png')} />
          <Image/>
          
          {/* SEPARATEUR ORANGE */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1, width: 1, height: 10, backgroundColor: 'rgba(232,92,33,255)'}} />
          </View>
        </View>


        {/* CONTENTS */}
        <View style={styles.content}>      
          <View style={styles.content_col}>          
            <View style={styles.content_row}>
              <View style={styles.content_textbutton}>
                    <TouchableOpacity style={styles.content_button} onPress={onButtonPressed}>
                      <Image style={styles.content_image}
                             resizeMode={"contain"}
                             source={require('./../images/euro.png')}>
                      </Image>
                  </TouchableOpacity>
                  <Text style={styles.content_text}>Mes remboursements</Text>
              </View>
              <View style={styles.content_textbutton}>
                    <TouchableOpacity style={styles.content_button} onPress={onButtonPressed}>
                      <Image style={styles.content_image}
                             resizeMode={"contain"}
                             source={require('./../images/document.png')}>
                      </Image>
                  </TouchableOpacity>
                  <Text style={styles.content_text}>Mes contrats</Text>
              </View>
            </View>
          </View>


          {/* ROW 2 */}
          <View style={styles.content_col}>          
            <View style={styles.content_row}>
              <View style={styles.content_textbutton}>
                    <TouchableOpacity style={styles.content_button} onPress={onButtonPressed}>
                      <Image style={styles.content_image}
                             resizeMode={"contain"}
                             source={require('./../images/user.png')}>
                      </Image>
                  </TouchableOpacity>
                  <Text ellipsizeMode='clip' numberOfLines={2} style={styles.content_text}>Mes informations personnelles</Text>
              </View>

              <View style={styles.content_textbutton}>
                    <TouchableOpacity style={styles.content_button} onPress={onButtonPressed}>
                      <Image style={styles.content_image}
                             resizeMode={"contain"}
                             source={require('./../images/mail.png')}>
                      </Image>
                  </TouchableOpacity>
                  <Text style={styles.content_text}>Contactez-nous</Text>
              </View>
            </View>
          </View>


          {/* ROW 3 */}
          <View style={styles.content_col}>  
            <View style={styles.content_row}>
              <MainButton name='Legal' 
                          uri="https://lh3.googleusercontent.com/WjU5CdsZ_mazg6Em4V4nCd97nlMHzgVH6FqEiICEGwPGBVDa5eOeiZbw02Mjbz8W25QHOY8pLmKfV_U=w1440-h839"
                          onPress={() => {
                              this.props.nav.push({
                                  id: 'legal',
                                  data: Object
                              });
                          }}/>
              <MainButton name='Question' 
                          uri="https://lh3.googleusercontent.com/WjU5CdsZ_mazg6Em4V4nCd97nlMHzgVH6FqEiICEGwPGBVDa5eOeiZbw02Mjbz8W25QHOY8pLmKfV_U=w1440-h839"
                          onPress={() => {
                              this.props.nav.push({
                                  id: 'home',
                                  data: Object
                                });
                          }}/>
            </View>
          </View>
        </View>


        { /* TAB BAR */ }
        <View style={styles.tab_bar}>
          <TouchableOpacity onPress={onHomePressed}>
            <View>
              <Image style={styles.tab_image}
                     resizeMode={"contain"}
                     source={require('./../images/home.png')}>
              </Image>
              <Text style={styles.tab_text}>Accueil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPhonePressed}>
            <View>
              <Image style={styles.tab_image}
                     resizeMode={"contain"}
                     source={require('./../images/phone.png')}>
              </Image>
              <Text style={styles.tab_text}>Urgences</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onSettingsPressed}>
            <View>
              <Image style={styles.tab_image}
                     resizeMode={"contain"}
                     source={require('./../images/settings.png')}>
              </Image>
              <Text style={styles.tab_text}>Paramètres</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>        
    );
  }
}


MainScene.propTypes = {
  nav: PropTypes.object.isRequired,
};


/* ============================================================================================================= */
/* STYLESHEETS                                                                                                   */
/* ============================================================================================================= */
var styles = StyleSheet.create({
    mainContainer: {
      /*backgroundColor:'red',*/
      flexDirection:'column',
      flex:1 // take all available space
    },

    /* =============================================== */
    top_bar:{
        /*backgroundColor:'#81c04d',*/
        paddingBottom:10,
        flexDirection:'column'
    },

    logo_image: {
      width: 128, 
      height: 96
      /*backgroundColor: "rgba(0,255,0,255)",*/
    },
    

    /* =============================================== */
    content: {
      backgroundColor:'white',
      flex:1,
      paddingBottom:32,
      paddingTop:16,
    },

    content_col: {
      flex:1,
      /*backgroundColor:'pink',*/
    },

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

    /* =============================================== */
    tab_bar:{
      paddingBottom: 8, 
      paddingTop: 8,
      backgroundColor:'gray',
      flexDirection:'row',
      justifyContent: 'space-between'
    },

    tab_image: {
      height: 32, 
    },

    tab_text: {
      /*backgroundColor: 'red', */
      textAlign:'center',
      color:'white'
    }
});


/* ============================================================================================================= */
/* CALLBACKS                                                                                                     */
/* ============================================================================================================= */
const onHomePressed = () => {
  //Alert.alert("home press");
  this.navigator.push(this);
}

const onPhonePressed = () => {
  Alert.alert("phone press");
}

const onSettingsPressed = () => {
  // Alert.alert("settings press");
  // CodePush.sync({
  //   // ATTENTION: l'option 'updateDialog: true' impliquera le rejet de l'app par Apple. 
  //   // Il ne faut pas de dialogue d'update, ça doit être invisible.
  //   updateDialog: false, 
  //   installMode: CodePush.InstallMode.IMMEDIATE
  // });
}

const onButtonPressed = () => {
  Alert.alert("button press");
}


//AppRegistry.registerComponent('ReactLayouts', () => ReactLayouts);
