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


          <View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               />
               <View></View>
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
            style={{width: '100%', height: 200}}
            source={require('../assets/images/pvp_bg.jpg')}/>
              <Button title ="Jugar" color="#EB5757"></Button>
          </View>

          <View style={styles.item}>
          <View style={styles.inlineContent}>
            <Text style={styles.title}>SOLO</Text>
            </View>
            <Image 
            style={{width: '100%', height: 200}}
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
}
});
