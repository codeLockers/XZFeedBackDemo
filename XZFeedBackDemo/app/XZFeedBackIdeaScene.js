'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

class XZFeedBackIdeaScene extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    	submitBtnTextColor:'rgb(238,238,238)'
    };
  }

  render() {

  	let contentView = (() => {
  		return(

  			<View style={{height:120,backgroundColor:'white',marginTop:64,flexDirection:'row'}}>
  				<Image 
  				style={{marginLeft:17,marginTop:15,width:45,height:45}}
  				source={require('../image/logo.png')}/>
  				<View style={{flex: 1}}>
  					<Text style={{marginTop:20,marginLeft:18,marginRight:25,color:'black',fontSize:12}}>老师，您好！我们珍惜您的每一个反馈，您的建议和批评是对极课最大的支持，是我们产品优化改进的方向和动力</Text>
  					<Text style={{color:'black',fontSize:12,alignSelf: 'flex-end',marginTop:23,marginRight:18,}}>极课教师产品经理 金鑫</Text>
  				</View>
  			</View>
  			
  			)
  	})

  	let inputView = (() => {
  		return(
  			<View style={{flex: 1,backgroundColor:'white'}}>
  				<TextInput 
  				style={{flex: 1,padding:20}} 
  				maxLength={500}
  				multiline={true}
  				fontSize={17}
  				placeholder='请在此输入...'
  				placeholderTextColor='rgb(233,233,233)'
  				ref='textInput'
  				onFocus={() => {
  					console.log('focus')
  				}}
  				onChangeText={(text) => {
  					console.log(text.length)
  					this.setState({
  					  submitBtnTextColor: (text.length == 0) ?'rgb(238,238,238)':'red' 
  					});
  				}}
  				/>
  				<Text style={{marginBottom:12.5,marginRight:17.5,color:'rgb(204,204,204),fontSize:15',alignSelf: 'flex-end',}}>500字</Text>
  			</View>
  			)
  	})

  	let submitBtn = (() => {

  		return (
  			<View style={{height:50,backgroundColor:'rgb(124,175,253)',margin:10,borderRadius:5,justifyContent: 'center',alignItems: 'center',}}>
  				<Text style={{color:this.state.submitBtnTextColor}}>提交</Text>
  			</View>
  			)
  	})

    return (
      <TouchableWithoutFeedback onPress={() => {
  				this.refs.textInput.blur()
  				
  			}}>
	      <View style={{flex:1,backgroundColor:'rgb(243,243,243)'}}>
	      	{contentView()}
	      	{inputView()}
	      	{submitBtn()}
	      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackIdeaScene;