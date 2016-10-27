'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  PixelRatio,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

class XZFeedBackCommonCell extends Component {

  static defaultProps = {
    
    pixelRatio:PixelRatio.get()

  }

  _onPressed(){
    this.props.showAlertView(this.props.rowID)
  }

  render() {
    return (
		<TouchableOpacity onPress={this._onPressed.bind(this)}>
	      <View style={{height:102/this.props.pixelRatio,flexDirection:'row',alignItems: 'center',}}>
	      	<Text style={{flex:1,margin:36/this.props.pixelRatio}}>{this.props.title}</Text>
	      	<Image 
	      	style={{marginRight:36/this.props.pixelRatio,height:20,width:20}}
	      	source={require('../image/right_arrow.png')}
	      	/>
	      </View>
	  	</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackCommonCell;