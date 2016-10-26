import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image
} from 'react-native';

import XZFeedBackScene from './XZFeedBackScene.js'

export default class XZFeedBackDemo extends Component {

  _renderNavigationBar(){

    var routeMapper = {
      RightButton(route,navigator,index,navState){},
      LeftButton(route,navigator,index,navState){

        return(
          <Image
          style={{width:11.5,height:21,marginLeft:10,marginTop:(40-21)/2}}
          source={require('../image/back.png')}
          />
        )
      },
      Title(route,navigator,index,navState){
        return (
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
              <Text style={{color:'white',fontSize:20,}}>{route.title}</Text>
            </View>
          )
      }
    }

    return (
      <Navigator.NavigationBar
      style ={{backgroundColor:'rgb(66,133,244)',justifyContent: 'center',alignItems: 'center',}}
      routeMapper={routeMapper}/>
      )
  }

  render() {
    return (
      <Navigator 
      initialRoute={{title:'帮助反馈',component:XZFeedBackScene}}
      renderScene={(route,navigator) => {
        return <route.component {...route} navigator={navigator}/>
      }}
      navigationBar={this._renderNavigationBar()}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('XZFeedBackDemo', () => XZFeedBackDemo);