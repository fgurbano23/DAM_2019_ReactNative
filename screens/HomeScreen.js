import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView,
  View,
  ImageBackground,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.mainView}>
        {/* RANKING */}
        <View style={styles.rankingWrapper}>
          <Image source={require('../assets/images/trophy.png')} ></Image>
          <View>
            <Text style={styles.rankingSubTitle}>Ranking</Text>
            <Text>1/1000</Text>
          </View>
        </View>
        {/* PVP */}
        <View style={styles.contestWrapper}>
          <Text style={styles.contestType}>PVP</Text>
          <View style={styles.buttonWrapper}>
            
              {/* <Button 
                title = "Retar"
                color = "#F2C94C">
              </Button>
              <Button               
                style={styles.buttonsToPlay}
                title = "Jugar"
                color = "#F2C94C">
              </Button> */}
          </View>
        </View>
        {/* SOLO */}
        <View style={styles.contestWrapper}>
          <Text style={styles.contestType}>SOLO</Text>
          <View style={styles.buttonWrapper}>
            <Button 
              style={styles.buttonsToPlay}
              title = "Jugar"
              color = "#F2C94C">
            </Button>
          </View>
        </View>
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
 mainView : {
  flexDirection:'column',
  backgroundColor:'white',
  padding:10,
  height:'100%'
 },
 rankingWrapper:{
   flexDirection:'row',
   justifyContent:'space-between',
   width:'100%',
   backgroundColor:'red',
   marginBottom:10,
   padding:10
 },
 rankingSubTitle:{
  color: '#03303A',
  fontWeight: 'bold'
 },
 contestWrapper:{
  flexDirection:'column',
  position:'relative',
  width:'100%',
  height:'30%',
  backgroundColor:'blue',
  marginBottom:10,
 },
 contestType:{
  backgroundColor:'#621107',
  width:'25%',
  height:'15%',
  textAlign:'center',
  color:'white'
 },
 buttonWrapper:{
  backgroundColor:'green',
  flexWrap: 'nowrap',
  flexDirection:'row-reverse',
  position:'absolute',
  bottom:0,
  right:0,
  margin:10
 },
 buttonsToPlay:{
 }
 
});
