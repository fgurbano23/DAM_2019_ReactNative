import * as WebBrowser from 'expo-web-browser';
import React,{ Component }  from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  ListView,
  View,
  ImageBackground,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';
import TabBarIcon from "../components/TabBarIcon";
import LinksScreen from "./LinksScreen";

class HomeScreen extends Component{
  state = {
      'invitationModal':false,
      'giftModal':false,
    'appData':{
      'appTotal':5000,
    },
    'userInfo':{
      'username':'MyUser',
      'userPosition':123,
    }
  }
    toggleInvitationModal(visible) {
        this.setState({ invitationModal: visible });
    };
    toggleGiftModal(visible) {
        this.setState({ giftModal: visible });
    };

  render(){
    return (
      <View style={styles.container}>

        {/*Main*/}
        <ScrollView>
          <View style={ styles.notificationBar}>
              <View style={{flexDirection:'row'}}>
                  <Image
                      style={{width: 30, height: 30}}
                      source={require('../assets/images/trophy.png')}/>
                  <Text style={{color:'white',marginLeft:10,fontWeight:'bold'}}>{this.state.userInfo.username}</Text>
              </View>
              <View  style={{flexDirection:'row'}}>
                  <TouchableHighlight onPress = {() => {this.toggleInvitationModal(true)}}>
                      <Image
                          style={{width: 25, height: 25,  marginRight:15}}
                          source={require('../assets/images/notification.png')}/>
                  </TouchableHighlight>
                  <TouchableHighlight  onPress = {() => {this.toggleGiftModal(true)}}>
                      <Image
                          style={{width: 25, height: 25, marginRight:10}}
                          source={require('../assets/images/gift_notification.png')}/>
                  </TouchableHighlight>
              </View>
          </View>

          <View style={styles.item}>
             <Text style = {{marginLeft:15,fontWeight:'bold',fontSize:20,color: '#621107'}}>¡Encuentra a tus amigos!</Text>
                  <TextInput
                      style = {styles.SearchUser}
                      underlineColorAndroid = "transparent"
                      placeholder = "Nombre de usuario"
                      placeholderTextColor = "black"
                      autoCapitalize = "none"
                  />
          </View>

          <View style={styles.rankingWrapper}>
          <Image 
            style={{width: 60, height: 60}}
            source={require('../assets/images/trophy.png')}/>
            <View>
              <Text style={styles.title}>Ranking</Text>
              <Text style={styles.rankingPosition}>
              {this.state.userInfo.userPosition + '/' + this.state.appData.appTotal}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.inlineContent}>
              <Text style={styles.title}>PVP</Text>
              <Button title ="Retar a un amigo" color="#F2C94C"></Button>
            </View>
            <Image 
            style={{width: '100%', height: 150}}
            source={require('../assets/images/pvp_bg.jpg')}/>
              <Button title ="Jugar" color="#EB5757"></Button>
          </View>

          <View style={styles.item}>
          <View style={styles.inlineContent}>
            <Text style={styles.title}>SOLO</Text>
            </View>
            <Image 
            style={{width: '100%', height: 150}}
            source={require('../assets/images/books_bg.jpg')}/>
            <Button title ="Jugar" color="#EB5757"></Button>
          </View>
        </ScrollView>

          {/*NOTIFICATION MODAL*/}
          <Modal
              animationType = {"slide"} transparent = {false}
              visible = {this.state.invitationModal}
              onRequestClose = {() => { console.log("Modal has been closed.") } }>
              <View>
                  
                  <View style={{height:'70%'}}>
                      <ScrollView>
                          <View style={styles.invitationItem}>
                              <Image
                                  style={{width: 35, height: 35}}
                                  source={require('../assets/images/Ellipse.png')}/>
                              <Text style={{fontWeight:'bold'}}>{this.state.userInfo.username}</Text>
                              <View>
                                  <Button
                                      title ="Rechazar"
                                      color="#E0E0E0">
                                  </Button>
                              </View>
                              <View>
                                  <Button
                                      title ="Aceptar"
                                      color="#EB5757">
                                  </Button>
                              </View>
                          </View>
                      </ScrollView>
                  </View>
                  <View style={{position:'absolute',bottom:0,right:30}}>
                      <Button
                          title ="Regresar"
                          color="#EB5757"
                          onPress={() => this.toggleInvitationModal(!this.state.invitationModal)}>
                      </Button>
                  </View>
              </View>

          </Modal>

          {/*GIFT MODAL */}
          <Modal
              animationType = {"slide"} transparent = {false}
              visible = {this.state.giftModal}
              onRequestClose = {() => { console.log("Modal has been closed.") } }>
              <View>
                  <ImageBackground
                      style={{width: '100%', height: 50,marginTop:30,marginBottom:30}}
                      source={require('../assets/images/arrow_title.png')}>
                      <Text style={{textAlign: 'center',color:'white',fontWeight:'bold',fontSize:25}}>Premios</Text>
                  </ImageBackground>
                  <View style={{height:'70%'}}>
                      <ScrollView>
                          <View style={styles.invitationItem}>
                              <Image
                                  style={{width: 35, height: 35}}
                                  source={require('../assets/images/gift.png')}/>
                              <Text style={{fontWeight:'bold'}}>{this.state.userInfo.username}</Text>
                              <View>
                                  <Button
                                      title ="Aceptar"
                                      color="#EB5757">
                                  </Button>
                              </View>
                          </View>
                      </ScrollView>
                  </View>
                  <View style={{position:'absolute',bottom:0,right:30}}>
                      <Button
                          title ="Regresar"
                          color="#EB5757"
                          onPress={() => this.toggleGiftModal(!this.state.giftModal)}>
                      </Button>
                  </View>
              </View>

          </Modal>

      </View>
    )
  }
}

export default HomeScreen

HomeScreen.navigationOptions = {
    title: 'TriviaMóvil',
    headerStyle: {
        backgroundColor: '#3b3b3b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

const styles = StyleSheet.create({
  container:{
    padding: 8,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom:8,
 },
 inlineContent:{
   display:'flex',
   backgroundColor:'white',
   flexShrink:0,
   flexBasis:1,
   flexDirection:'row',
   justifyContent:'space-between',
   padding:5,
   height:50
 },
 title:{
  color: '#621107',
  fontWeight: 'bold',
  fontSize:20
},
rankingWrapper:{
  backgroundColor:"#E0E0E0",
  display:'flex',
  flexShrink:0,
  flexBasis:1,
  flexDirection:'row',
  justifyContent:'space-around',
  padding:10,
  marginBottom:8
},
rankingPosition:{
  color: '#03303A',
  fontSize:30,
  textAlign:'center',
  fontWeight:"200"
},
SearchUser:{
    margin: 15,
    marginTop:3,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding:10
},
notificationBar:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#3b3b3b',
        height:50,
        padding:10,
        marginTop:30,
        marginBottom:15
    },
invitationItem:{
    display:'flex',
    backgroundColor:'white',
    flexShrink:0,
    flexBasis:1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
    height:50,
    marginBottom:15,
}
});
