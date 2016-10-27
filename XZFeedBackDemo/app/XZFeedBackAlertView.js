'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

class XZFeedBackAlertView extends Component {

  _close_Pressed(){

    this.props.hideAlertView()
  }

  render() {
    return (
      <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,backgroundColor:'rgba(0,0,0,0.68)',position:'absolute',top:0,left:0}}>
          <View style={{backgroundColor:'white',flex: 1,marginLeft:15,marginTop:90,marginRight:15,marginBottom:47,borderRadius:5,alignItems: 'flex-end',}}>

          <TouchableOpacity onPress={this._close_Pressed.bind(this)}>
          	<Image 
          	style={{width:30,height:30,marginTop:10,marginRight:10}}
          	source={require('../image/close.png')}
          	/>
          </TouchableOpacity>
          <Text style={{alignSelf:'flex-start',marginTop:5,fontSize:17,lineHeight:25,marginHorizontal:10}}>{this.props.content}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackAlertView;

