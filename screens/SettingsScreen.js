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

export default class SettingsScreen extends Component {
  state = {
    'modal':false,
    'rules':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    'userInfo':{
      'username':'MyUser',
    }
  }
  toggleModal(visible) {
    this.setState({ modal: visible });
  };

  render(){
    return (
        <View style={{height:'100%'}}>

          <View>
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
              <Text style={styles.rankingPosition}>¿Cómo jugar?</Text>
            </TouchableHighlight>
          </View>

          <View style={{
            marginBottom:0,
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Image
                style={{width: '25%',height:80,marginBottom:5,marginTop:15}}
                source={require('../assets/images/Ellipse.png')}/>
            <View style = {styles.centerButton}>
              <Button title ="Cambiar imagen" color="#EB5757" ></Button>
            </View>
          </View>

          <View style={{
            marginTop:0,
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Text style={styles.rankingPosition}>Username:</Text>
            <Text>MyUser</Text>
          </View>


          <View style={styles.item}>
            <TextInput
                style = {styles.SearchUser}
                underlineColorAndroid = "transparent"
                placeholder = "Nombre de usuario"
                placeholderTextColor = "black"
                autoCapitalize = "none"
            />
          </View>


          <View style = {styles.centerButton}>
            <Button title ="Guardar" color="#EB5757" ></Button>
          </View>

          {/*MODAL COMO JUGAR*/}
          <Modal animationType = {"slide"} transparent = {false}
                 visible = {this.state.modal}
                 onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <View>

              <Text style={{    margin:15,
                color: '#03303A',
                fontSize:20,
                textAlign:'center',
                fontWeight:"bold"}}>¿Cómo jugar?</Text>

              <View style={{height:'70%'}}>
                <ScrollView>
                  <View style={styles.containerImg}>
                    <Text>{this.state.rules}</Text>
                  </View>
                </ScrollView>
              </View>

              <View style={{position:'absolute',bottom:0,right:30}}>
                <Button
                    title ="Regresar"
                    color="#EB5757"
                    onPress={() => this.toggleModal(!this.state.modal)}>
                </Button>
              </View>

            </View>
          </Modal>


        </View>


    );
  }

}

SettingsScreen.navigationOptions = {
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
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
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
    margin:15,
    color: '#03303A',
    fontSize:20,
    textAlign:'right',
    fontWeight:"bold"
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
  },
  centerButton: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});