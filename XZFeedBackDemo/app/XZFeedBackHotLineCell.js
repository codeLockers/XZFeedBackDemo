'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

class XZFeedBackHotLineCell extends Component {
  render() {
    return (
      <View>	
	      <View style={{height:80,flexDirection:'row'}}>
	      	<View style={{width:80,justifyContent: 'center',alignItems: 'center'}}>
	      		<Image
				style={{width:47,height:47}}
				source={require('../image/telephone.png')}/>
	      	</View>
	      	<View style={{flex:1}}>
	      		<View style={{justifyContent:'flex-end',height:42}}>
	      			<View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'flex-start'}}>
	      				<Text style={{fontSize:17,fontWeight:'400'}}>{this.props.title}</Text>
	      				<Text style={{borderWidth:1,borderColor:'rgb(238,238,238)',borderRadius:12.5,color:'rgb(67,133,254)',paddingVertical:5,paddingHorizontal:17,height:25,marginLeft:10}}>400-1155-618</Text>
	      			</View>
	      		</View>
	      		<Text style={{marginTop:5,color:'#cccccc',fontSize:12}}>人工服务时间:周一到周五 09:30-18:30</Text>
	      	</View>
	      </View>
	      <View style={{backgroundColor:'rgb(249,249,249)',height:10}}>
	      	<View style={{backgroundColor:'rgb(238,238,238)',height:1}}></View>
	      	<View style={{backgroundColor:'rgb(238,238,238)',height:1,marginTop:8}}></View>
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackHotLineCell;