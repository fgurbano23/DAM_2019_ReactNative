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
  ListView,
  View,
  ImageBackground,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';
import TabBarIcon from "../components/TabBarIcon";

class HomeScreen extends Component{
  state = {
    'appData':{
      'appTotal':5000
    },
    'userInfo':{
      'username':'MyUser',
      'userPosition':123,
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={ styles.notificationBar}>
              <View style={{flexDirection:'row'}}>
                  <Image
                      style={{width: 30, height: 30}}
                      source={require('../assets/images/trophy.png')}/>
                  <Text style={{color:'white',marginLeft:10,fontWeight:'bold'}}>{this.state.userInfo.username}</Text>
              </View>
              <View  style={{flexDirection:'row'}}>
                  <Image
                      style={{width: 25, height: 25,  marginRight:15}}
                      source={require('../assets/images/notification.png')}/>
                  <Image
                      style={{width: 25, height: 25, marginRight:10}}
                      source={require('../assets/images/gift_notification.png')}/>
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
      </View>
    )
  }
}

export default HomeScreen

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
    }
});
