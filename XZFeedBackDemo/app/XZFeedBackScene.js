'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  Dimensions
} from 'react-native';

import XZFeedBackHotLineCell from './XZFeedBackHotLineCell.js'
import XZFeedBackIdeaCell from './XZFeedBackIdeaCell.js'
import XZFeedBackCommonCell from './XZFeedBackCommonCell.js'

class XZFeedBackScene extends Component {

  constructor(props) {
    super(props);
  	var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
    this.state = {
    	dataSource: ds.cloneWithRows(['拨打官方客服热线','意见反馈','什么是最新试卷?','通知里面能够接受哪些通知?','试卷追踪是什么?','学科追踪是什么?','我的学生是什么?','如何扫描二维码登录pc端?','如何与学生家长发消息?','如何更改密码?'])
    };
  }

  _renderRow(rowData, sectionID, rowID, highlightRow){

  	if (rowID == 0) {
  		return(<XZFeedBackHotLineCell title={rowData}/>)
  	}else if(rowID == 1){
  		return(<XZFeedBackIdeaCell title={rowData}/>)
  	}

  	return(<XZFeedBackCommonCell title={rowData}/>)
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
  	if (rowID > 1) {
  		return(
  			<View 
  			style={{height:1,backgroundColor:'rgb(240,240,240)'}}
  			key={sectionID+rowID}>
  			</View>)
  	}
  }

  render() {
    return (
    	<View>
	      <ListView
	      style = {{paddingTop:64}}
	      dataSource = {this.state.dataSource}
	      bounces ={false}
	      renderSeparator ={this._renderSeparator}
	      renderRow = {this._renderRow}/>
	      <View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,backgroundColor:'black',opacity:0.6,position:'absolute',top:0,left:0}}></View>
      	</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackScene;