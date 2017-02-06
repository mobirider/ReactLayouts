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
  View
} from 'react-native';


export default class ReactLayouts extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>

        {/* TOP BAR */}
        <View style={styles.top_bar}>
          {/* LOGO AGR2 */}
          <Image 
            style={styles.logo_image}
            resizeMode={"contain"}
            source={require('./images/vs_logo.png')} />
          <Image/>
          
          {/* SEPARATEUR ORANGE */}
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1, width: 1, height: 10, backgroundColor: 'rgba(232,92,33,255)'}} />
          </View>
        </View>


        {/* CONTENTS */}
        <View style={styles.content}>      
          <View style={styles.content_row}>
            <TouchableOpacity onPress={onHomePressed}>
              <View style={styles.content_button}>
                <Image style={styles.content_image}
                       resizeMode={"contain"}
                       source={require('./images/home.png')}>
                </Image>
                <Text style={styles.content_text}>Mes remboursements</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHomePressed}>
              <View style={styles.content_button}>
                <Image style={styles.content_image}
                       resizeMode={"contain"}
                       source={require('./images/home.png')}>
                </Image>
                <Text style={styles.content_text}>Mes contrats</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.content_row}>
            <TouchableOpacity onPress={onHomePressed} style={styles.content_button}>
                
                  <Image style={styles.content_image}
                         resizeMode={"contain"}
                         source={require('./images/home.png')}>
                  </Image>
                  <Text style={{ color:'white', numberOfLines:'2' }}>Mes informations personnelles</Text>
                
              </TouchableOpacity>
              <TouchableOpacity onPress={onHomePressed}>
                <View style={styles.content_button}>
                  <Image style={styles.content_image}
                         resizeMode={"contain"}
                         source={require('./images/home.png')}>
                  </Image>
                  <Text style={styles.content_text}>Contactez-nous</Text>
                </View>
              </TouchableOpacity>
          </View>

          <View style={styles.content_row}>
            <TouchableOpacity onPress={onHomePressed}>
                <View style={styles.content_button}>
                  <Image style={styles.content_image}
                         resizeMode={"contain"}
                         source={require('./images/home.png')}>
                  </Image>
                  <Text style={styles.content_text}>Qui sommes-nous ?</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onHomePressed}>
                <View style={styles.content_button}>
                  <Image style={styles.content_image}
                         resizeMode={"contain"}
                         source={require('./images/home.png')}>
                  </Image>
                  <Text style={styles.content_text}>Mentions légales</Text>
                </View>
              </TouchableOpacity>
          </View>


          <View style={styles.content_row}>
          </View>
        </View>


        { /* TAB BAR */ }
        <View style={styles.tab_bar}>
          <TouchableOpacity onPress={onHomePressed}>
            <View>
              <Image style={styles.tab_image}
                     resizeMode={"contain"}
                     source={require('./images/home.png')}>
              </Image>
              <Text style={styles.tab_text}>Accueil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPressed}>
            <View>
              <Image style={styles.tab_image}
                     resizeMode={"contain"}
                     source={require('./images/phone.png')}>
              </Image>
              <Text style={styles.tab_text}>Urgences</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPressed}>
            <View>
              <Image style={styles.tab_image}
                     resizeMode={"contain"}
                     source={require('./images/settings.png')}>
              </Image>
              <Text style={styles.tab_text}>Paramètres</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>        
    );
  }
}

var styles = StyleSheet.create({
    mainContainer: {
      backgroundColor:'#ebeef0',
      flexDirection:'column',
      flex:1 // take all available space
    },

    /* =============================================== */
    top_bar:{
        backgroundColor:'#81c04d',
        paddingTop:0,
        paddingBottom:10,
        flexDirection:'column'
    },

    logo_image: {
      width: 128, 
      height: 96, 
      backgroundColor: "rgba(0,255,0,255)",
    },
    

    /* =============================================== */
    content: {
      backgroundColor:'#ebee00',
      flex:1,
    },

    content_row: {
      paddingBottom: 32, 
      paddingTop: 32,
      flex:1,
      backgroundColor:'#55FFc0',
      flexDirection:'row',
      justifyContent: 'space-between'
    },
    content_button: {
      flexDirection:'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: "rgba(0,0,0,255)",
      height:96
    },
    content_image: {
      height: 64, 
      backgroundColor: "rgba(232,92,33,255)",
    },
    content_text: {
      backgroundColor: "rgba(0,92,45,255)",
    },


    /* =============================================== */
    tab_bar:{
      paddingBottom: 8, 
      paddingTop: 8,
      backgroundColor:'#55c0FF',
      flexDirection:'row',
      justifyContent: 'space-between'
    },

    tab_image: {
      height: 32, 
      backgroundColor: "rgba(128,255,0,255)",
    },

    tab_text: {
      backgroundColor: 'red', 
      textAlign:'center'
    }
});



const onHomePressed = () => {
  Alert.alert("home press");
}

const onPhonePressed = () => {
  Alert.alert("phone press");
}

const onSettingsPressed = () => {
  Alert.alert("settings press");
}

AppRegistry.registerComponent('ReactLayouts', () => ReactLayouts);
