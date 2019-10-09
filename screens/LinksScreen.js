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

const data = require('../constants/getDatos.json');

export default class LinksScreen extends Component{

  state = {
    posiciones : data['Ranking']['posiciones'],
    sorteo:data['Sorteos'][0]['premios']
  };

  render (){
    return(
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.rankingPosition}>Premios</Text>
          </View>

          <View style={styles.invitationItem}>
            <View>
              {
                Object.keys(this.state.sorteo).map((item, index) => (
                    <View key={"sorteo"+index}>
                      <Text>{item+'. '+'Tipo:'+this.state.sorteo[item]['tipo']}</Text>
                      <Text style={{fontWeight:'bold'}} key={'sorteo'+index}>
                        {
                          this.state.sorteo[item]['titulo']
                        }
                      </Text>
                    </View>
                ))
              }
            </View>
            <View>
              <Image
                  style={{width: 35, height: 35}}
                  source={require('../assets/images/gift.png')}/>
            </View>
          </View>


          <View style={{margin:30}}>
            <Text style = {{marginLeft:15,fontWeight:'bold',fontSize:20,color: '#621107'}}>¡Encuentra a tus amigos!</Text>
            <TextInput
                style = {styles.SearchUser}
                underlineColorAndroid = "transparent"
                placeholder = "Buscar usuario"
                placeholderTextColor = "black"
                autoCapitalize = "none"
            />
          </View>


          <View>
            {
             Object.keys(this.state.posiciones).map((item, index) => (
                  <View style={styles.invitationItem} key={index}>
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('../assets/images/Ellipse.png')}/>
                    <Text style={{fontWeight:'bold'}}>
                      {item+'. '+this.state.posiciones[item]['alias']}
                    </Text>
                    <Text>
                      {this.state.posiciones[item]['puntos']+'pts'}
                    </Text>
                  </View>
              ))
            }
          </View>
        </ScrollView>
    );
  }

  }

LinksScreen.navigationOptions = {
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
    justifyContent:'space-around',
    padding:5,
    marginBottom:15,
  }
});
