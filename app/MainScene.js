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
  AppState,
  Navigator
} from 'react-native';

import MainButton from './MainButton.js';
import ModuleManager from '../app_modules/ModuleManager.js';


/* ============================================================================================================= */
/* CODE PUSH                                                                                                     */
/* ============================================================================================================= */
import CodePush from "react-native-code-push";


/* ============================================================================================================= */
/* MAIN CLASS                                                                                                    */
/* ============================================================================================================= */
export default class MainScene extends Component {


  // Callback appelée lorsque le 1er render() a été appelé.
  componentDidMount() {
      // Création d'une callback sur le changement de status de l'app
      AppState.addEventListener('change', this.handleAppStateChange);

      // CodePush.sync({
      //     // ATTENTION: l'option 'updateDialog: true' impliquera le rejet de l'app par Apple. 
      //     // Il ne faut pas de dialogue d'update, ça doit être invisible.
      //     updateDialog: true, 
      //     installMode: CodePush.InstallMode.IMMEDIATE
      // });

      // Ceci va vérifier puis télécharger une update CodePush, puis la mettre de côté pour un déploiement la prochaine
      // fois que l'app passera en foreground.
      // Si on ne veut pas attendre le prochain passage en foreground et installer tout de suite, utiliser 'CodePush.InstallMode.IMMEDIATE'
      // Attention, c'est moins plaisant côté UX.
      CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
  }


  // Callback enregistrée sur le changement d'état de l'app.
  handleAppStateChange(currentAppState) {

      if(currentAppState == 'active') {
          // si on vient de passer en foreground, vérifier, télécharger, puis préparer la prochaine màj.
          CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});

          //  CodePush.sync({
          //     // ATTENTION: l'option 'updateDialog: true' impliquera le rejet de l'app par Apple. 
          //     // Il ne faut pas de dialogue d'update, ça doit être invisible.
          //     updateDialog: true, 
          //     installMode: CodePush.InstallMode.IMMEDIATE
          // });
      }
  }


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
              <MainButton name='Mes remboursements' 
                          uri="http://i.imgur.com/hUm9cuc.png"
                          onPress={() => {
                              Alert.alert("Remboursements.");
                          }}/>
              <MainButton name='Mes contrats' 
                          uri="http://i.imgur.com/7rvCQPu.png"
                          onPress={() => {
                              Alert.alert("Contrats.");
                          }}/>
            </View>
          </View>


          {/* ROW 2 */}
          <View style={styles.content_col}>          
            <View style={styles.content_row}>
              <MainButton name='Mes informations personnelles' 
                          uri="http://i.imgur.com/FgrL5ur.png"
                          onPress={() => {
                              Alert.alert("Mes infos.");
                          }}/>
              <MainButton name='Contactez-nous' 
                          uri="http://i.imgur.com/8RMo1nS.png"
                          onPress={() => {
                              Alert.alert("Contact.");
                          }}/>
            </View>
          </View>


          {/* ROW 3 
            Ici on réutilise un Component ("MainButton")
            Attention, on ne peut pas passer d'images stockées en local dans le package, seulement une URI pour aller les télécharger au runtime !!!
            WHAT. THE. F*CK.
            En revanche, passer des *liens directs* vers des images fonctionne (sauf en mode avion trololol). 
            Il y a toutefois un cache local (encore heureux !).
          */}
          <View style={styles.content_col}>  
            <View style={styles.content_row}>
              <MainButton name='Mentions légales' 
                          uri="http://i.imgur.com/8tsM1ut.png"
                          onPress={() => {
                              this.props.nav.push({
                                  id: 'legal',
                                  data: Object
                              });
                          }}/>
              
              <MainButton name='Qui sommes-nous ?' 
                          uri="http://i.imgur.com/gmsI1Cq.png"
                          onPress={() => {
                              this.props.nav.push({
                                  id: 'about',
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
      paddingBottom:0,
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
  Alert.alert("home press");
  //this.navigator.push(this);
}

const onPhonePressed = () => {
  Alert.alert("phone press");
}

const onSettingsPressed = () => {
  // Alert.alert("settings press");
  CodePush.sync({
    // ATTENTION: l'option 'updateDialog: true' impliquera le rejet de l'app par Apple. 
    // Il ne faut pas de dialogue d'update, ça doit être invisible.
    updateDialog: true, 
    installMode: CodePush.InstallMode.IMMEDIATE
  });
}

const onButtonPressed = () => {
  Alert.alert("button press");
}


//AppRegistry.registerComponent('ReactLayouts', () => ReactLayouts);
