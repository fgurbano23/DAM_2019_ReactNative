import React,{ Component }  from 'react';
import { ExpoConfigView } from '@expo/samples';
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
/*
class SettingsScreen extends Component{
  state = {
          'userInfo':{
            'username':'MyUser',
            'useralias': 'MyAlias',
            'userPosition':123,
            'userlang' : 'es', //es español, en ingles
          }
  }

  render(){
    
  }
}*/

export default function SettingsScreen() {
  
  return (
    <ScrollView>
      <View>
      <Text>¿Cómo jugar?</Text>
      </View>
      <View style={styles.rankingWrapper}>
          <Image 
            style={{width: 60, height: 60}}
            source={require('../assets/images/trophy.png')}/>            
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
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
});

/*
SettingsScreen.navigationOptions = {
  title: 'app.json',
};*/
