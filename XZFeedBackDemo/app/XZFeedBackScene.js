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
import XZFeedBackAlertView from './XZFeedBackAlertView.js'

class XZFeedBackScene extends Component {

  static defaultProps = {
    
    alertContent:[
                  "教师最后一天扫描上传成绩的试卷或作用，若最后一天扫描了多份试卷或作业，则首页显示全部的试卷或作业。",
                  "1.最新成绩；\n2.班级排名连续两次下降；\n3.班级知识点连续两次下降；\n4.关注的学生成绩连续两次下降；\n5.学生标记了“题目仍然不懂”；\n6.学生赞了老师的解析；",
                  "试卷追踪中呈现所有上传过成绩的试卷数据，在点击具体试卷后，您可以查看到班级考试成绩、平均分、学生排名等信息；还可以查看具体的题目分析和对各小题大题的横向比较。",
                  "学科追踪中您可以查看一段时间内该学科的总体情况、知识点得分率情况、薄弱知识点、学生的分层情况、考试成绩趋势图等信息。",
                  "在我的学生中您可以查看到您关注的学生成绩情况，也可以点击内页查看学生个人的学情、还可以批量关注您想关注的学生。",
                  "点击屏幕下方的加号按钮，点击扫描登录电脑端。",
                  "点击家校互联、点击学生姓名，然后您可以选择打电话或者发微信联系学生家长，如果您发现绑定学生的不是家长本人，可以解除绑定。",
                  "点击我的——修改帐号信息——修改登录密码。"
                  ]
  }

  constructor(props) {
    super(props);
  	var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
    this.state = {
    	dataSource: ds.cloneWithRows(['拨打官方客服热线','意见反馈','什么是最新试卷?','通知里面能够接受哪些通知?','试卷追踪是什么?','学科追踪是什么?','我的学生是什么?','如何扫描二维码登录pc端?','如何与学生家长发消息?','如何更改密码?']),
      alertView:Array()
    };
  }

//Common_Methods
_showAlertView(rowID){

  this.state.alertView.push(rowID)
  // console.log(this.state.alertView)
  this.setState({
    alertView:this.state.alertView
  })
}

_hideAlertView(){

  // console.log('hide')
  this.state.alertView.length=0
  this.setState({
    alertView:this.state.alertView
  })
}

//ListView_Methods
  _renderRow(rowData, sectionID, rowID, highlightRow){

  	if (rowID == 0) {
  		return(<XZFeedBackHotLineCell title={rowData}/>)
  	}else if(rowID == 1){
  		return(<XZFeedBackIdeaCell title={rowData}/>)
  	}

  	return(<XZFeedBackCommonCell title={rowData} rowID={rowID} showAlertView={this._showAlertView.bind(this)}/>)
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

    let renderAlertView = this.state.alertView.map((r,i) => {

      return (
        <XZFeedBackAlertView 
        key={r+i} 
        content={this.props.alertContent[r-2]} 
        hideAlertView={this._hideAlertView.bind(this)}/>)
    })

    return (
    	<View>
	      <ListView
	      style = {{paddingTop:64}}
	      dataSource = {this.state.dataSource}
	      bounces ={false}
	      renderSeparator ={this._renderSeparator}
	      renderRow = {this._renderRow.bind(this)}/>
        {renderAlertView}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZFeedBackScene;