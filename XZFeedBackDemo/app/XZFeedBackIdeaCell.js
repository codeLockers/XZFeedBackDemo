'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

class XZFeedBackIdeaCell extends Component {
  render() {
    return (
      
      <View style={{height:103}}>
        <TouchableOpacity onPress={this.props.onPress}>
        	<View style={{height:80,flexDirection:'row'}}>
        		<View style={{width:80,justifyContent: 'center',alignItems: 'center'}}>
        			<Image
        			style={{width:47,height:47}}
        			source={require('../image/email.png')}/>
        		</View>
        		<View style={{flex:1}}>
        			<View style={{justifyContent:'flex-end',height:42}}>
        				<Text style={{fontSize:17,fontWeight:'400'}}>{this.props.title}</Text>
        			</View>
        			<Text style={{marginTop:5,color:'#cccccc',fontSize:12}}>欢迎提供问题和想法</Text>
        		</View>
        	</View>
        </TouchableOpacity>
        	<View style={{backgroundColor:'rgb(249,249,249)',flex:1}}>
        		<View style={{backgroundColor:'rgb(238,238,238)',height:1}}/>
        		<Text style={{flex:1,fontSize:15,color:'#cccccc',marginLeft:20,paddingTop:3}}>热门问题</Text>
        		<View style={{backgroundColor:'rgb(238,238,238)',height:1}}/>
        	</View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackIdeaCell;